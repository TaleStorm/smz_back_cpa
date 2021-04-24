import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AccountBalanceEntity} from "../account/entities/AccountBalanceEntity";
import {AccountContactInfoEntity} from "../account/entities/AccountContactInfoEntity";
import {AccountPrivateInfoEntity} from "../account/entities/AccountPrivateInfoEntity";
import {AccountPersonalInfoEntity} from "../account/entities/AccountPersonalInfoEntity";
import {AuthEntity} from "./entities/AuthEntity";

@Module({
  imports: [TypeOrmModule.forFeature([
      AuthEntity,
      AccountBalanceEntity,
      AccountContactInfoEntity,
      AccountPrivateInfoEntity,
      AccountPersonalInfoEntity,
  ])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
