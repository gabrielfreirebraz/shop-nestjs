import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import CreateItemDTO from './dtos/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async createItem(dto: CreateItemDTO) {
    return this.prisma.item.create({
      data: {
        name: dto.name,
        price: dto.price,
      },
    });
  }
}
