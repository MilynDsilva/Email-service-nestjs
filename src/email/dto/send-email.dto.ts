import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export interface ISendEmailDto {
    recipient: string;
    subject: string;
    body: string;
    from: string;
}
export class SendEmailDto implements ISendEmailDto {
    constructor(dto?:ISendEmailDto) { 
        if(dto){
            this.recipient = dto.recipient;
            this.subject = dto.subject;
            this.body = dto.body;
            this.from = dto.from;
        }
    }
    @ApiProperty()
    @IsNotEmpty()
    recipient: string;

    @ApiProperty()
    @IsNotEmpty()
    subject: string;

    @ApiProperty()
    @IsNotEmpty()
    body: string;

    @ApiProperty()
    @IsNotEmpty()
    from: string;
}