import { IAccountPersonalInfo } from '../interfaces/IAccount';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreatePersonalInfoDto implements IAccountPersonalInfo {
  @ApiModelProperty()
  @IsDate()
  readonly birthDate: Date;

  @ApiModelProperty()
  @IsString()
  readonly city: string;

  @ApiModelProperty()
  @IsString()
  readonly firstName: string;

  @ApiModelProperty()
  @IsString()
  readonly lastName: string;

  @ApiModelProperty()
  @IsDate()
  readonly passportDateIssue: Date;

  @ApiModelProperty()
  @IsString()
  readonly passportDivisionCode: string;

  @ApiModelProperty()
  @IsString()
  readonly passportNumber: number;

  @ApiModelProperty()
  @IsString()
  readonly passportSerial: number;

  @ApiModelProperty()
  @IsString()
  readonly passportWhomIssue: string;

  @ApiModelProperty()
  @IsString()
  readonly region: string;

  @ApiModelProperty()
  @IsNumber()
  readonly sex: number;

  @ApiModelProperty()
  @IsString()
  readonly surName: string;
}
