/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    bio?: string;

    @IsNumber()
    @IsOptional()
    @Min(0)
    followers?: number;
}
