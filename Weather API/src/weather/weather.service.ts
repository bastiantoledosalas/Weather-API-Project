import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {

    getWeather(city: string){
        return {
            city,
            temperature: 25,
            description: 'soleado',
        };
    }
}
