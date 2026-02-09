import { Controller, Post, Body } from '@nestjs/common';
import { EmailsService } from './emails.service';

@Controller('emails')
export class EmailsController {
  constructor(
    private readonly emailsService: EmailsService,
  ) {}

  @Post('send')
  send(@Body() body: any) {
    const { to, subject, text } = body;
    return this.emailsService.sendEmail(
      to,
      subject,
      text,
    );
  }
}
