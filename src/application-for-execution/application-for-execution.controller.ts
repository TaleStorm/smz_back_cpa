import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { ApplicationForExecutionService } from './application-for-execution.service';
import { CreateApplicationDto } from './dto/CreateApplicationDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Заявки на исполнение контрактов')
@Controller('application-for-execution')
export class ApplicationForExecutionController {
  constructor(
    private readonly applicationForExecutionService: ApplicationForExecutionService,
  ) {}

  @Get('/contract/:contractId')
  @ApiOperation({ summary: 'Вывести контракт по идентификатору' })
  async getApplicationByContractId(
    @Param('contractId', ParseIntPipe) contractId: number,
  ): Promise<any> {
    return this.applicationForExecutionService.getApplicationByContractId(
      contractId,
    );
  }

  @Get('/executor/:executorId')
  @ApiOperation({ summary: 'Вывести контракт по исполнителю' })
  async getApplicationByExecutorId(
    @Param('executorId', ParseIntPipe) executorId: number,
  ): Promise<any> {
    return this.applicationForExecutionService.getApplicationByAccountExecutorId(
      executorId,
    );
  }

  @Post('/')
  @ApiOperation({ summary: 'Добавить заявку на исполнение контракта' })
  async setApplication(@Body() body: CreateApplicationDto): Promise<any> {
    return this.applicationForExecutionService.setApplication(body);
  }

  @Put('/:appId')
  @ApiOperation({ summary: 'Изменить заявку на исполнение контракта' })
  async updApplication(
    @Body() body: CreateApplicationDto,
    @Param('appId', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.applicationForExecutionService.updApplication(body, id);
  }
}
