import { Module } from '@nestjs/common';

import { ChatbotController } from './controller/chatbot.controller';
import { PokemonService } from './service/pokemon.services';

@Module({
  controllers: [ChatbotController],
  providers: [PokemonService],
})
export class ApiModule {}
