import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private cacheService: CacheService,
  ) {}

  async getWeather(city: string) {
    const cacheKey = `weather:${city.toLowerCase()}`;

    // Buscar en cache
    const cached = await this.cacheService.get(cacheKey);
    if (cached){
        return JSON.parse(cached);
    }

    try {
      const apiKey = this.configService.get<string>('WEATHER_API_KEY');

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&unitGroup=metric`;

      const response = await firstValueFrom(
        this.httpService.get(url),
      );

      const data = {
        city        : response.data.currentConditions.temp,
        temperature : response.data.currentConditions.temp,
        description : response.data.currentConditions.conditions,
        humidity    : response.data.currentConditions.humidity,
        datetime    : response.data.currentConditions.datetime,
      };

      // Almacenar en cache
      await this.cacheService.set(
        cacheKey,
        JSON.stringify(data),
        43200,
      )
      return data;

    } catch (error) {
      throw new HttpException(
        'Error fetching weather data',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}