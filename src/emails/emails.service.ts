import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'vivian.funk25@ethereal.email ',
        pass: '77RZ5eypyHbPdNFfxs',
      },
    });
  }

  async sendEmail(
    to: string,
    subject: string,
    text: string,
  ) {
    const info = await this.transporter.sendMail({
      from: '"ATS System" <no-reply@ats.com>',
      to,
      subject,
      text,
    });

    return {
      messageId: info.messageId,
    };
  }
}
