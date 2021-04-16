import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { DialogflowParams } from '../params/dialogflow.params';
import { PokemonService } from '../service/pokemon.services';

@Controller({ path: '/webhook/chatbot' })
export class ChatbotController {
  constructor(private pokemonService: PokemonService) {}

  @Post()
  async handleRequest(
    @Body() body: DialogflowParams,
    @Res()
    response: Response,
  ): Promise<Response> {
    const action = body.queryResult.action;
    const name = body.queryResult.parameters.pokemonName;
    if (action === 'get-pokemon') {
      const pokemon = await this.pokemonService.fetchPokemonByName(name);
      return response.status(200).json({
        fulfillmentMessages: [
          {
            card: {
              title: `${pokemon.name}, ${pokemon.hp} Hp`,
              subtitle: pokemon.types.join(),
              imageUri: pokemon.spriteUrl,
              buttons: [
                {
                  text: 'yo',
                  postback: '',
                },
              ],
            },
          },
        ],
      });
    }
    return response.status(200);
  }
}
