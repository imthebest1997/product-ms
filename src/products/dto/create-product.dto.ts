import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsNumber({
        maxDecimalPlaces: 2    
    })
    @Min(0)
    @Type(() => Number)
    price: number;

    @IsBoolean()
    @IsOptional()
    available?: boolean;
}
