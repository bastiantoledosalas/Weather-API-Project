import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOperation({summary: 'Get current weather by city'})
  @ApiQuery({name: 'city', required: true, example: 'Santiago'})
  getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);
  }
}