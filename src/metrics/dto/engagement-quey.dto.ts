import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";

/* eslint-disable prettier/prettier */
export class EngagementQueryDto {
    @IsInt()
    @Min(0)
    @Type(() => Number)
    likes: number;

    @IsInt()
    @Min(0)
    @Type(() => Number)
    comments: number;

    @IsInt()
    @Min(1)
    @Type(() => Number)
    followers: number;
}