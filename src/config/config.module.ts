import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ConfigModuleProvider } from './providers/config-module.provider';

@Global()
@Module({
  imports: [ConfigModuleProvider()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
