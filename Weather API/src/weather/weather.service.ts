import { Injectable, HttpException, HttpStatus, Logger} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private cacheService: CacheService,
  ) {}

  async getWeather(city: string) {
    const cacheKey = `weather:${city.toLowerCase()}`;

    this.logger.log(`Request weather for city: ${city}`);
    
    // Buscar en cache
    const cached = await this.cacheService.get(cacheKey);
    if (cached){
      this.logger.log(`Cache HIT for key: ${cacheKey}`);
        return JSON.parse(cached);
    }

    this.logger.warn(`Cache MISS for key: ${cacheKey}`);

    try {
      const apiKey = this.configService.get<string>('WEATHER_API_KEY');

      this.logger.log(`Calling external weather API for: ${city}`);

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

      this.logger.log(`Weather data cached for key: ${cacheKey}`);

      return data;

    } catch (error) {

      this.logger.error(
        `Error fetching weather for city: ${city}`,
        error.stack,
      );

      throw new HttpException(
        'Error fetching weather data',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}