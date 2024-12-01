import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString());
  }

  @Post('upload/followers')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileFollowers(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString());
  }

  @Post('upload/following')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileFollowing(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString());
  }
}
