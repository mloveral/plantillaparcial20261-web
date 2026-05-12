/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreatePostDto {
    @IsString()
    caption: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    likes?: number = 0;
}
