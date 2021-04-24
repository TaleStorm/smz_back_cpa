import { IAccountPrivateInfo } from '../interfaces/IAccount';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber, IsString } from 'class-validator';

export class CreatePrivateInfoDto implements IAccountPrivateInfo {
  @ApiModelProperty()
  @IsString()
  readonly bankName: string;

  @ApiModelProperty()
  @IsNumber()
  readonly bic: number;

  @ApiModelProperty()
  @IsNumber()
  readonly cardHolder: number;

  @ApiModelProperty()
  @IsNumber()
  readonly cardNumber: number;

  @ApiModelProperty()
  @IsNumber()
  readonly correspondentAccount: number;

  @ApiModelProperty()
  @IsString()
  readonly inn: string;

  @ApiModelProperty()
  @IsString()
  readonly payDetail: string;

  @ApiModelProperty()
  @IsNumber()
  readonly paymentAccount: number;

  @ApiModelProperty()
  @IsString()
  readonly pfr: string;
}
