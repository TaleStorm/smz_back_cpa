import {HttpModule, Module} from '@nestjs/common';
import { WalletOneController } from './wallet-one.controller';
import { WalletOneService } from './wallet-one.service';
import { CookieService } from './CookieService';

@Module({
  imports:[HttpModule],
  controllers: [WalletOneController],
  providers: [WalletOneService, CookieService],
  exports: [WalletOneService],
})
export class WalletOneModule {}
