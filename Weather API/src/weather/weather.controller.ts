import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOperation({ summary: 'Get current weather by city' })
  @ApiQuery({
    name: 'city',
    required: true,
    example: 'Santiago',
  })
  async getWeather(@Query('city') city: string) {
    // 🔒 Validación mínima necesaria
    if (!city || city.trim() === '') {
      throw new BadRequestException('City parameter is required');
    }

    // 👉 Llama directamente a tu service (ya está bien implementado)
    return this.weatherService.getWeather(city.trim());
  }
}