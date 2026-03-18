import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class GetWeatherDto {
  @ApiProperty({
    example: 'Santiago',
    description: 'Nombre de la ciudad',
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: '2026-03-17',
    required: false,
    description: 'Fecha inicio (YYYY-MM-DD)',
  })
  @IsOptional()
  @IsString()
  start?: string;

  @ApiProperty({
    example: '2026-03-21',
    required: false,
    description: 'Fecha fin (YYYY-MM-DD)',
  })
  @IsOptional()
  @IsString()
  end?: string;
}