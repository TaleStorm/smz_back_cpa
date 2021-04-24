import { IAccountBalance, IAccountContactInfo } from '../interfaces/IAccount';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAccountBalanceDto implements IAccountBalance {
  @ApiModelProperty()
  @IsString()
  readonly balanceOwnerId: number;

  @ApiModelProperty()
  @IsString()
  readonly balanceAmount: number;
}
