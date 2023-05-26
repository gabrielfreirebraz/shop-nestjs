import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import CreateItemDTO from './dtos/create-item.dto';
import { ItemsService } from './items.service';
import { ApiTags } from '@nestjs/swagger';
import { SafeParseError, z } from 'zod';

@Controller('items')
@ApiTags('Items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post('create-item/:id')
  async createItem(@Body() body: CreateItemDTO, @Param('id') id: string) {
    if (!('name' in body) || !('price' in body)) {
      throw new BadRequestException('Items faltando na requisicao!');
    }

    const schema = z.object({
      name: z.string().min(3).trim(),
      price: z.number(),
    });

    const validation = schema.safeParse(body);

    if (!validation.success) {
      const { error } = validation as SafeParseError<any>;

      throw new UnprocessableEntityException(error);
    }

    return await this.itemService.createItem(body);
  }
}
