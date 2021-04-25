import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FnsModule } from './fns/fns.module';
import { WalletOneModule } from './wallet-one/wallet-one.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './auth/entities/AuthEntity';
import { AccountContactInfoEntity } from './account/entities/AccountContactInfoEntity';
import { AccountPrivateInfoEntity } from './account/entities/AccountPrivateInfoEntity';
import { AccountPersonalInfoEntity } from './account/entities/AccountPersonalInfoEntity';
import { ContractModule } from './contract/contract.module';
import { ContractEntity } from './contract/entities/ContractEntity';
import { ApplicationForExecutionModule } from './application-for-execution/application-for-execution.module';
import { ApplicationEntity } from './application-for-execution/entities/ApplicationEntity';
import { AccountBalanceEntity } from './account/entities/AccountBalanceEntity';
import { InvoceModule } from './invoce/invoce.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'smz',
      entities: [
        AuthEntity,
        AccountContactInfoEntity,
        AccountPersonalInfoEntity,
        AccountPrivateInfoEntity,
        ContractEntity,
        ApplicationEntity,
        AccountBalanceEntity,
      ],
      synchronize: true,
    }),
    AuthModule,
    FnsModule,
    WalletOneModule,
    AccountModule,
    ContractModule,
    ApplicationForExecutionModule,
    InvoceModule,
  ],
  providers: [AppService],
})
export class AppModule {}
