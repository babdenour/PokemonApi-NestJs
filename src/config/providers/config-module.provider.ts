import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export const ConfigModuleProvider = (): DynamicModule => {
  return ConfigModule.forRoot({
    isGlobal: true,
  });
};
