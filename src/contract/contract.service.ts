import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateAuthDto } from '../auth/dto/CreateAuthDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractEntity } from './entities/ContractEntity';
import { CreateContractDto } from './dto/CreateContractDto';
import { AuthEntity } from '../auth/entities/AuthEntity';

import { v4 as uuidv4 } from 'uuid';
import { AccountBalanceEntity } from '../account/entities/AccountBalanceEntity';

@Injectable()
export class ContractService {
  @InjectRepository(ContractEntity)
  private contractEntityRepository: Repository<ContractEntity>;

  @InjectRepository(AuthEntity)
  private authEntityRepository: Repository<AuthEntity>;

  @InjectRepository(AccountBalanceEntity)
  private accountBalanceEntityRepository: Repository<AccountBalanceEntity>;

  async getAllContractByUser(accId: number): Promise<any> {
    const acc = await this.authEntityRepository.findOne(accId);

    if (!acc) {
      throw new NotFoundException(`Account by id: ${accId} is not found`);
    }

    return await this.contractEntityRepository.find({
      where: {
        contractOwnerId: acc.id
      }
      // relations: ['account'],
    });
  }

  async createContract(data: CreateContractDto): Promise<any> {
    data.contractUuid = uuidv4();
    return await this.contractEntityRepository.save(data);
  }

  async updateContract(
    updateData: CreateContractDto,
    id: number,
  ): Promise<any> {
    const found = await this.contractEntityRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Contract by id: ${id} is not found`);
    }

    const acc = await this.authEntityRepository.findOne(
      updateData.contractOwnerId,
    );

    if (!acc) {
      throw new NotFoundException(
        `Account by id: ${updateData.contractOwnerId} is not found`,
      );
    }

    return await this.contractEntityRepository.save(
      this.contractEntityRepository.merge(found, updateData),
    );
  }

  async checkContractByUuid(uuid: string): Promise<any> {
    return await this.contractEntityRepository.findOne({
      where: {
        contractUuid: uuid,
      },
    });
  }

  async payConfirmContractByUuid(
    uuid: string,
    executerId: number,
  ): Promise<any> {
    const contract = await this.contractEntityRepository.findOne({
      where: {
        contractUuid: uuid,
      },
    });

    if (!contract) {
      throw new NotFoundException(`Contract by uuid: ${uuid} is not found`);
    }

    const accountBalance = await this.accountBalanceEntityRepository.findOne({
      where: {
        balanceOwnerId: executerId,
      },
    });

    const accountBalanceContractHolder = await this.accountBalanceEntityRepository.findOne({
      where: {
        balanceOwnerId: contract.contractOwnerId,
      },
    })

    if (!accountBalanceContractHolder) {
      throw new NotFoundException(
          `Account balance for this owner ${contract.contractOwnerId} is not found`,
      );
    }

    if(accountBalanceContractHolder.balanceAmount - contract.contractPrice < 0) {
      throw new ConflictException('Balance contract holder is less then 0')
    }

    accountBalanceContractHolder.balanceAmount = accountBalanceContractHolder.balanceAmount - contract.contractPrice;

    await this.accountBalanceEntityRepository.save(accountBalanceContractHolder);


    if (!accountBalance) {
      throw new NotFoundException(
        `Account balance for this owner ${executerId} is not found`,
      );
    }

    accountBalance.balanceAmount =
      accountBalance.balanceAmount + contract.contractPrice;
    return await this.accountBalanceEntityRepository.save(accountBalance);
  }

  async getAllContractInSystem(data): Promise<any> {

    const query = {};

    (data.take) ? Object.assign(query, { take: data.take }) : { take: 100 };

    (data.skip) ? Object.assign(query, { skip: data.skip }) : { skip: 0 };

    return this.contractEntityRepository.find(query)
  }
}
