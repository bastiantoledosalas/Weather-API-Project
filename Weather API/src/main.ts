import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import pino from 'pino';

async function bootstrap() {
  const logger = pino({
    transport: {
      target: 'pino-pretty', // 👈 logs bonitos en dev
      options: {
        colorize: true,
      },
    },
  });

    const app = await NestFactory.create(AppModule, {
    logger,
  });
  
  // Configurar Swagger
  const config = new DocumentBuilder()
  .setTitle('Weather API')
  .setDescription('API para consultar el clima utilizado cache con Redis')
  .setVersion('1.0')
  .addTag('Weather')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document); // endpoint
  await app.listen(3000);
}
bootstrap();
