import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //TODO: remove cors
  app.enableCors(); // allows all by default
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
