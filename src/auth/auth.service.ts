import {ConflictException, Injectable} from '@nestjs/common';
import { CreateAuthDto } from './dto/CreateAuthDto';
import {InjectRepository} from "@nestjs/typeorm";
import {AuthEntity} from "./entities/AuthEntity";
import {Repository} from "typeorm";
import {AccountPersonalInfoEntity} from "../account/entities/AccountPersonalInfoEntity";
import {AccountContactInfoEntity} from "../account/entities/AccountContactInfoEntity";
import {AccountPrivateInfoEntity} from "../account/entities/AccountPrivateInfoEntity";
import {AccountBalanceEntity} from "../account/entities/AccountBalanceEntity";
import {UpdateAccountBalanceDto} from "../account/dto/UpdateAccountBalanceDto";

@Injectable()
export class AuthService {
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

  async login(body: CreateAuthDto): Promise<any> {
    const found = await this.authEntityRepository.findOne({
      where: {
        vkId: body.vkId
      }
    })

    if(found) {
      return found;
    }else{
      const newAcc = await this.authEntityRepository.save(body)
      const balance = this.accountBalanceEntityRepository.create()
      balance.balanceOwnerId = newAcc.id;
      await this.accountBalanceEntityRepository.save(balance);

      const personalInfo = this.accountPersonalInfoEntityRepository.create()
      personalInfo.accountOwnerId = newAcc.id;
      await this.accountPersonalInfoEntityRepository.save(personalInfo);

      const privateInfo = this.accountPrivateInfoEntityRepository.create();
      privateInfo.accountOwnerId = newAcc.id;
      await this.accountPrivateInfoEntityRepository.save(privateInfo);

      const contactInfo = this.accountContactInfoEntityRepository.create();
      contactInfo.accountOwnerId = newAcc.id;
      await this.accountContactInfoEntityRepository.save(contactInfo);

      return newAcc;
    }



  }

}
