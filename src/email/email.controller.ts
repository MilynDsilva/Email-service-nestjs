import { Body, Controller, Post } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(
        private emailService: EmailService
    ) { }

    @Post('send')
    async sendEmail(@Body() sendEmailDto :SendEmailDto){
        return this.emailService.sendEmail(sendEmailDto)
    }
}
