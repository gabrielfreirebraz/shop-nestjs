import { Module } from '@nestjs/common';
import { ItemsModule } from './module/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
