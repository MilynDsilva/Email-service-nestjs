import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import * as transport from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ENV_VARS } from 'const';

@Injectable()
export class EmailService {
    constructor(
        private configService: ConfigService
    ) { }
    async sendEmail(sendEmailDto: SendEmailDto) {
        try {
            const transporter = transport.createTransport({
                host: this.configService.get(ENV_VARS.SMTP.HOST),
                port: this.configService.get(ENV_VARS.SMTP.PORT),
                auth: {
                    user: this.configService.get(ENV_VARS.SMTP.USERNAME),
                    pass: this.configService.get(ENV_VARS.SMTP.PASSWORD)
                },
            });

            await transporter.sendMail({
                from: sendEmailDto.from,
                to: sendEmailDto.recipient,
                subject: sendEmailDto.subject,
                text: undefined,
                html: sendEmailDto.body,
            });
            return 'Success'
        } catch (error) {
            throw error
        }
    }
}
