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

  @Put('/contact-info/:accId')
  @ApiOperation({ summary: 'Обновление контактной информации' })
  async setContactInfo(@Body() body: CreateContactInfoDto, @Param('accId', ParseIntPipe) accId: number ) {
    return await this.accountService.setContractInfo(body, accId);
  }

  @Put('/personal-info/:accId')
  @ApiOperation({ summary: 'Обновление персональной информации' })
  async setPersonalInfo(@Body() body: CreatePersonalInfoDto, @Param('accId', ParseIntPipe) accId: number) {
    return await this.accountService.setPersonalInfo(body, accId);
  }

  @Put('/private-info/:accId')
  @ApiOperation({ summary: 'Обновление приватной информации' })
  async setPrivateInfo(@Body() body: CreatePrivateInfoDto, @Param('accId', ParseIntPipe) accId: number) {
    return await this.accountService.setPrivateInfo(body, accId);
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
