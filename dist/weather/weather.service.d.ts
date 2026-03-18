import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CacheService } from 'src/cache/cache.service';
export declare class WeatherService {
    private httpService;
    private configService;
    private cacheService;
    constructor(httpService: HttpService, configService: ConfigService, cacheService: CacheService);
    getWeather(city: string): Promise<any>;
}
