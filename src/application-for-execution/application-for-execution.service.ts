import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ApplicationEntity } from './entities/ApplicationEntity';
import { CreateApplicationDto } from './dto/CreateApplicationDto';

@Injectable()
export class ApplicationForExecutionService {
  @InjectRepository(ApplicationEntity)
  private applicationEntityRepository: Repository<ApplicationEntity>;

  async getApplicationByContractId(contractId: number): Promise<any> {
    return await this.applicationEntityRepository.find({
      where: {
        contractId: contractId,
      },
    });
  }

  async getApplicationByAccountExecutorId(accId: number): Promise<any> {
    return await this.applicationEntityRepository.find({
      where: {
        accountExecutorId: accId,
      },
    });
  }

  async setApplication(data: CreateApplicationDto): Promise<any> {
    return await this.applicationEntityRepository.save(data);
  }

  async updApplication(data: CreateApplicationDto, id): Promise<any> {
    const found = await this.applicationEntityRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Application by id: ${id} is not found`);
    }

    await this.applicationEntityRepository.save(
      this.applicationEntityRepository.merge(found, data),
    );
  }
}
