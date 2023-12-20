import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import parser from 'lambda-multipart-parser';
import { createReadStream, writeFileSync } from 'fs';
import { nanoid } from 'nanoid';
import { upload } from './s3';
import { resize } from './resize';
import { errorMessage } from './errorMessage';
import { ACCEPTED_MIME_TYPES, THUMBNAIL_RESOLUTIONS } from './constants';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log('Request received');
  const result = await parser.parse(event);
  const imageFile = result.files.find((f) => f.fieldname === 'img');

  if (!imageFile) {
    return errorMessage('Please provide an img form value');
  }

  console.log('Image received');

  if (!ACCEPTED_MIME_TYPES.includes(imageFile.contentType)) {
    return errorMessage(
      'Image must be one of the following content types: "image/jpeg", "image/png"'
    );
  }

  const fileSize = imageFile.content.length; // in bytes
  console.log('fileSize', fileSize);
  if (fileSize > 11 * 1000 * 1000) {
    return errorMessage('File size must be less than 11MB');
  }

  const inputPath = '/tmp/original.jpg';
  // TODO - can be optimized by piping content buffer to ffmpeg directly instead of writing to file system
  writeFileSync(inputPath, imageFile.content);

  console.log('Resizing images');
  try {
    await resize({ inputPath });
  } catch (error) {
    return errorMessage('Error resizing image', error);
  }

  console.log('Uploading images to S3');
  const tasks = [];
  const uuid = nanoid();
  for (let index = 0; index < THUMBNAIL_RESOLUTIONS.length; index++) {
    const resolution = THUMBNAIL_RESOLUTIONS[index];
    const outputPath = `/tmp/${resolution}.jpg`;
    const key = `thumbnails/${uuid}/${resolution}.jpg`;

    try {
      const task = upload({
        bucket: process.env.Bucket,
        key,
        body: createReadStream(outputPath),
        contentType: imageFile.contentType,
      });
      tasks.push(task);
    } catch (error) {
      return errorMessage('Error uploading thumbnails to S3', error);
    }
  }

  const thumbnailUrls = await Promise.allSettled(tasks);

  return {
    statusCode: 200,
    body: JSON.stringify({ thumbnailUrls }),
  };
};
