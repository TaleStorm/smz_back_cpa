import { Module } from '@nestjs/common';
import { InvoceController } from './invoce.controller';
import { InvoceService } from './invoce.service';

@Module({
  controllers: [InvoceController],
  providers: [InvoceService]
})
export class InvoceModule {}
