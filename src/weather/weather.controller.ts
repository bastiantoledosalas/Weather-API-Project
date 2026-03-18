import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { WeatherService } from './weather.service';
import { WeatherResponseDto } from './dto/weather-response.dto';

@ApiTags('weather')
@Controller('weather')

export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOperation({
     summary: 'Get current weather by city', 
    })
  @ApiQuery({
    name: 'city',
    required: true,
    example: 'Santiago',
  })

  @ApiResponse({
    status: 200,
    description: 'Weather data retrieved successfully',
    type: WeatherResponseDto,
  })
  @ApiResponse({
    status: 502,
    description: 'Error fetching weather data',
  })

  async getWeather(
    @Query() city: string) {
    // 🔒 Validación mínima necesaria
    if (!city || city.trim() === '') {
      throw new BadRequestException('City parameter is required');
    }

    // 👉 Llama directamente a tu service (ya está bien implementado)
    return this.weatherService.getWeather(city.trim());
  }
}