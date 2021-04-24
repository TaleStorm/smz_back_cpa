import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put, Query,
} from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/CreateContractDto';
import {ApiOperation, ApiQuery, ApiTags} from '@nestjs/swagger';

@ApiTags('Контракты')
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiOperation({ summary: 'Все контракты по пользователю' })
  @Get('/:accId')
  async getAllContractsByUser(@Param('accId', ParseIntPipe) accId: number) {
    return this.contractService.getAllContractByUser(accId);
  }

  @Post('/')
  @ApiOperation({ summary: 'Добавить контракт' })
  async createContract(@Body() body: CreateContractDto) {
    return await this.contractService.createContract(body);
  }

  @Put('/:contractId')
  @ApiOperation({ summary: 'Обновить контракт' })
  async updateContract(
    @Body() body: CreateContractDto,
    @Param('contractId') contractId: number,
  ) {
    return await this.contractService.updateContract(body, contractId);
  }

  @Get('/check/:uuid')
  @ApiOperation({ summary: 'Проверить контракт по uuid' })
  async checkContract(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return await this.contractService.checkContractByUuid(uuid);
  }

  @Get('/pay/:uuid/:executerId')
  @ApiOperation({ summary: 'Завершить сделку по uuid' })
  async paymentConfirm(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Param('executerId', ParseIntPipe) executerId: number,
  ) {
    //TODO надо выдергивать идентификатор исполнителя из uuid, соотвественно каждый UUID
    // должен быть уникальный у каждого исполнителя
    return await this.contractService.payConfirmContractByUuid(
      uuid,
      executerId,
    );
  }

  @Get('/')
  @ApiOperation({summary: 'Все контракты в системе'})
  @ApiQuery({ name: 'skip', required: false , description: 'offset по базе, по дефолту 0' })
  @ApiQuery({ name: 'take', required: false , description: 'limit по базе, по дефолту 10' })
  async getAllContractInSystem(@Query() { take, skip }): Promise<any> {
    return await this.contractService.getAllContractInSystem({take, skip})
  }
}
