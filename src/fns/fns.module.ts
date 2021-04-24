import { Module } from '@nestjs/common';
import { FnsController } from './fns.controller';
import { FnsService } from './fns.service';

@Module({
  controllers: [FnsController],
  providers: [FnsService]
})
export class FnsModule {}
