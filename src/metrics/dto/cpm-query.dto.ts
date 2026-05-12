/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsNumber, Min } from "class-validator";

export class CPMQueryDto {
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    cost: number;

    @IsNumber()
    @Min(1)
    @Type(() => Number)
    impressions: number;
}