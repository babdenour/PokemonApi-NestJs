import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { Pokemon } from 'src/api/types/pokemon';
interface TypesApi {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface StatsApi {
  base_stat: string;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface SpritesApi {
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    offici_alartwork: {
      front_default: string;
    };
  };
}

interface PokemonApi {
  name: string;
  stats: StatsApi[];
  types: TypesApi[];
  sprites: SpritesApi;
}

@Injectable()
export class PokemonService {
  public async fetchPokemonByName(name: string): Promise<Pokemon> {
    const api = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    try {
      const res = await fetch(api);
      const data: PokemonApi = (await res.json()) as PokemonApi;
      const types: TypesApi[] = data.types;
      const stats: StatsApi[] = data.stats;
      const sprites: SpritesApi = data.sprites;
      return {
        name,
        types: types.map((els) => els.type.name),
        hp: stats[0].base_stat,
        spriteUrl: sprites.other.dream_world.front_default,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
