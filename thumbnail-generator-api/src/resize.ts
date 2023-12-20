import { FFMPEG_PATH, ResizeOptions } from './constants';
import { exec } from 'child_process';

/**
 * @param options inputPath of image to be resized
 * @returns generates 3 thumbnail files `/tmp/$width/$height.jpg` with the following dimensions: [400x300, 160x120, 120x120]
 */
export async function resize(options: ResizeOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    // https://trac.ffmpeg.org/wiki/Scaling#SimpleRescaling
    // `-vf` reference doc - https://ffmpeg.org/ffmpeg-filters.html#scale-1
    // `-y`  reference doc - https://ffmpeg.org/ffmpeg.html#Main-options
    const command = `${FFMPEG_PATH} -loglevel error -y -i ${options.inputPath} -vf scale=w=400:h=300 -update true /tmp/400x300.jpg \
                                                                               -vf scale=w=160:h=120 -update true /tmp/160x120.jpg \
                                                                               -vf scale=w=120:h=120 -update true /tmp/120x120.jpg`;
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) reject(stderr);
      resolve(stdout);
    });
  });
}
