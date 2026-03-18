import { Injectable, Logger } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class CacheService {
  private client: Redis;
  private readonly logger = new Logger(CacheService.name);

  constructor() {
    if (process.env.REDIS_URL) {
      
      // 🚀 Producción (Railway)
      this.client = new Redis(process.env.REDIS_URL);
      this.logger.log('Using Redis from REDIS_URL');
    } else {

      // Local / Docker
      this.client = new Redis({
        host: process.env.REDIS_HOST || 'localhost',
        port: 6379,
      });
      this.logger.log('Using local Redis');
    }

    this.client.on('connect', () => {
      this.logger.log('Redis connected');
    });

    this.client.on('error', (err) => {
      this.logger.error('Redis error', err);
    });
  }

  async get(key: string): Promise<string | null> {
    this.logger.debug(`GET cache key: ${key}`);

    const result = await this.client.get(key);

    if (result) {
      this.logger.debug(`Cache HIT: ${key}`);
    } else {
      this.logger.debug(`Cache MISS: ${key}`);
    }

    return result; //
  }

  async set(key: string, value: string, ttl: number): Promise<void> {
    this.logger.debug(`SET cache key: ${key} (ttl: ${ttl}s)`);
    
    await this.client.set(key, value, 'EX', ttl);
  }
}