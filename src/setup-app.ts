import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupApp(app: INestApplication): void {
  setCors(app);
  setSwagger(app);
}

function setCors(app: INestApplication): void {
  app.enableCors({
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    methods: ['OPTIONS', 'GET', 'POST', 'PUT'],
    origin: true,
  });
}

function setSwagger(app: INestApplication): void {
  const config = new DocumentBuilder().setTitle('Onboarding Nestjs').setDescription('Api of the Onboarding Nestjs Application').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
