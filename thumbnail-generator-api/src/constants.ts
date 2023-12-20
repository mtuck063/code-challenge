import { PutObjectCommandInput } from '@aws-sdk/client-s3';

export const FFMPEG_PATH = '/opt/bin/ffmpeg';
export const ACCEPTED_MIME_TYPES = ['image/jpeg', 'image/png'];
export const THUMBNAIL_RESOLUTIONS = ['400x300', '160x120', '120x120'];

export interface UploadFileOptions {
  bucket: string;
  key: string;
  body: PutObjectCommandInput['Body'];
  contentType: PutObjectCommandInput['ContentType'];
}

export interface ResizeOptions {
  inputPath: string;
}
