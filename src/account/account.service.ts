import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountPersonalInfoEntity } from './entities/AccountPersonalInfoEntity';
import { AccountContactInfoEntity } from './entities/AccountContactInfoEntity';
import { AccountPrivateInfoEntity } from './entities/AccountPrivateInfoEntity';
import { CreateContactInfoDto } from './dto/CreateContactInfoDto';
import { CreatePrivateInfoDto } from './dto/CreatePrivateInfoDto';
import { CreatePersonalInfoDto } from './dto/CreatePersonalInfoDto';
import { AuthEntity } from '../auth/entities/AuthEntity';
import { AccountBalanceEntity } from './entities/AccountBalanceEntity';
import { UpdateAccountBalanceDto } from './dto/UpdateAccountBalanceDto';

@Injectable()
export class AccountService {
  @InjectRepository(AuthEntity)
  private authEntityRepository: Repository<AuthEntity>;

  @InjectRepository(AccountPersonalInfoEntity)
  private accountPersonalInfoEntityRepository: Repository<AccountPersonalInfoEntity>;

  @InjectRepository(AccountContactInfoEntity)
  private accountContactInfoEntityRepository: Repository<AccountContactInfoEntity>;

  @InjectRepository(AccountPrivateInfoEntity)
  private accountPrivateInfoEntityRepository: Repository<AccountPrivateInfoEntity>;

  @InjectRepository(AccountBalanceEntity)
  private accountBalanceEntityRepository: Repository<AccountBalanceEntity>;

  async getAllDataByAcc(accId: number): Promise<any> {
    const acc = await this.authEntityRepository.findOne(accId);

    if (!acc) {
      throw new NotFoundException(`Account by id: ${accId} is not found`);
    }

    const obj = {
      mainInfo: acc,
      contactInfo: await this.accountContactInfoEntityRepository.findOne({
        where: { accountOwnerId: accId },
      }),
      personalInfo: await this.accountPersonalInfoEntityRepository.findOne({
        where: { accountOwnerId: accId },
      }),
      privateInfo: await this.accountPrivateInfoEntityRepository.findOne({
        where: { accountOwnerId: accId },
      }),
      accountBalance: await this.accountBalanceEntityRepository.findOne({
        where: {
          balanceOwnerId: accId,
        },
      }),
    };
    return obj;
  }

  async setContractInfo(data: CreateContactInfoDto): Promise<any> {
    return await this.accountContactInfoEntityRepository.save(data);
  }

  async setPrivateInfo(data: CreatePrivateInfoDto): Promise<any> {
    return await this.accountPrivateInfoEntityRepository.save(data);
  }

  async setPersonalInfo(data: CreatePersonalInfoDto): Promise<any> {
    return await this.accountPersonalInfoEntityRepository.save(data);
  }

  async updateAccountBalance(
    data: UpdateAccountBalanceDto,
    id: number,
  ): Promise<any> {
    const found = await this.accountBalanceEntityRepository.findOne(id);

    return await this.accountBalanceEntityRepository.save(
      this.accountBalanceEntityRepository.merge(found, data),
    );
  }
}
