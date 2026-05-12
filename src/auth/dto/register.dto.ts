/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;
}