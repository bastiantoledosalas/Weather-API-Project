import { ApiProperty } from '@nestjs/swagger';

export class WeatherDayDto {
  @ApiProperty({ example: '2026-03-17' })
  date: string;

  @ApiProperty({ example: 25 })
  temp_max: number;

  @ApiProperty({ example: 12 })
  temp_min: number;

  @ApiProperty({ example: 18 })
  temp_avg: number;

  @ApiProperty({ example: 60 })
  humidity: number;

  @ApiProperty({ example: 'Partially cloudy' })
  description: string;
}

export class WeatherResponseDto {
  @ApiProperty({ example: 'Santiago' })
  city: string;

  @ApiProperty({
    type: [WeatherDayDto],
  })
  data: WeatherDayDto[];
}