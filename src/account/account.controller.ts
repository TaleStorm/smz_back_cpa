import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContactInfoDto } from './dto/CreateContactInfoDto';
import { CreatePersonalInfoDto } from './dto/CreatePersonalInfoDto';
import { CreatePrivateInfoDto } from './dto/CreatePrivateInfoDto';
import {UpdateAccountBalanceDto} from "./dto/UpdateAccountBalanceDto";

@ApiTags('Аккаунты в системе')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/:accId')
  @ApiOperation({ summary: 'Информация по аккаунту' })
  getAccounts(@Param('accId', ParseIntPipe) accId: number): Promise<any> {
    return this.accountService.getAllDataByAcc(accId);
  }

  @Put('/contact-info')
  @ApiOperation({ summary: 'Обновление контактной информации' })
  async setContactInfo(@Body() body: CreateContactInfoDto) {
    return await this.accountService.setContractInfo(body);
  }

  @Put('/personal-info')
  @ApiOperation({ summary: 'Обновление персональной информации' })
  async setPersonalInfo(@Body() body: CreatePersonalInfoDto) {
    return await this.accountService.setPersonalInfo(body);
  }

  @Put('/private-info')
  @ApiOperation({ summary: 'Обновление приватной информации' })
  async setPrivateInfo(@Body() body: CreatePrivateInfoDto) {
    return await this.accountService.setPrivateInfo(body);
  }

  @Put('/balance/:accId')
  @ApiOperation({ summary: 'Обновление баланса аккаунта' })
  async updAccountBalance(@Body() body: UpdateAccountBalanceDto) {
    return await this.accountService.updateAccountBalance(
      body,
      body.balanceOwnerId,
    );
  }
}
