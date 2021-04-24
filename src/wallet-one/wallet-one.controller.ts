import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Контроллер Wallet One')
@Controller('wallet-one')
export class WalletOneController {}
