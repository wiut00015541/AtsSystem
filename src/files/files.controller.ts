import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('candidate/:candidateId')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueName =
            Date.now() + extname(file.originalname);
          callback(null, uniqueName);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: any,
    @Param('candidateId') candidateId: string,
  ) {
    return this.filesService.saveFile(file, Number(candidateId));
  }

  @Get('candidate/:candidateId')
  getFilesByCandidate(@Param('candidateId') candidateId: string) {
    return this.filesService.findByCandidate(Number(candidateId));
  }
}
