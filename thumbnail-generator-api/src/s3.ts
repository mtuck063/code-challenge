import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { UploadFileOptions } from './constants';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const client = new S3Client({ region: 'us-east-1' });

export async function upload(options: UploadFileOptions): Promise<string> {
  const upload = new Upload({
    client: client,
    params: {
      Bucket: options.bucket,
      Key: options.key,
      Body: options.body,
      ContentType: options.contentType,
    },
  });

  const result = await upload.done();
  console.log(`Successfully uploaded to S3. Location: ${result.Location}`);

  const command = new GetObjectCommand({
    Bucket: options.bucket,
    Key: options.key,
  });

  return getSignedUrl(client, command, { expiresIn: 3600 });
}
