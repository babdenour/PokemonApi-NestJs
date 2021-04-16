import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { ConfigModule } from './config';

@Module({
  imports: [ApiModule, ConfigModule],
  exports: [],
})
export class AppModule {}
