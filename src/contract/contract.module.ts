import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractEntity } from './entities/ContractEntity';
import { AuthEntity } from '../auth/entities/AuthEntity';
import { AccountBalanceEntity } from '../account/entities/AccountBalanceEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContractEntity,
      AuthEntity,
      AccountBalanceEntity,
    ]),
  ],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
