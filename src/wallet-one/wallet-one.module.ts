import { Module } from '@nestjs/common';
import { WalletOneController } from './wallet-one.controller';
import { WalletOneService } from './wallet-one.service';

@Module({
  controllers: [WalletOneController],
  providers: [WalletOneService]
})
export class WalletOneModule {}
