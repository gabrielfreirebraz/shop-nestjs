import { ApiProperty } from '@nestjs/swagger';

export default class CreateItemDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}
