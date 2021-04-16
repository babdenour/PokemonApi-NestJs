import { ApiProperty } from '@nestjs/swagger';
class Parameters {
  @ApiProperty({ type: String })
  pokemonName: string;
}

class QueryResult {
  @ApiProperty({ type: String })
  action: string;

  @ApiProperty({ type: Parameters })
  parameters: Parameters;
}

export class DialogflowParams {
  @ApiProperty({ type: QueryResult })
  queryResult: QueryResult;
}
