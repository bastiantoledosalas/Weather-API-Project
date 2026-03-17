import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getWeather(city: string) {
    try {
      const apiKey = this.configService.get<string>('WEATHER_API_KEY');

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&unitGroup=metric`;

      const response = await firstValueFrom(
        this.httpService.get(url),
      );

      const data = response.data;

      // Transformación de datos
      return {
        city: data.resolvedAddress,
        temperature: data.currentConditions.temp,
        description: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        datetime: data.currentConditions.datetime,
      };

    } catch (error) {
      throw new HttpException(
        'Error fetching weather data',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}