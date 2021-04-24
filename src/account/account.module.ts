import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountPrivateInfoEntity } from './entities/AccountPrivateInfoEntity';
import { AccountContactInfoEntity } from './entities/AccountContactInfoEntity';
import { AccountPersonalInfoEntity } from './entities/AccountPersonalInfoEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from '../auth/entities/AuthEntity';
import { AccountBalanceEntity } from './entities/AccountBalanceEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthEntity,
      AccountPrivateInfoEntity,
      AccountContactInfoEntity,
      AccountPersonalInfoEntity,
      AccountBalanceEntity,
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
