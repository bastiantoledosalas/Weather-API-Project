import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [WeatherModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
