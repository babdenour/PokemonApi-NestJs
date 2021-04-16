import 'source-map-support/register';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setupApp } from './setup-app';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  setupApp(app);

  const port = configService.get<number>('PORT');
  await app.listen(port);
  console.log(`Web server listening on port ${port}`);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
