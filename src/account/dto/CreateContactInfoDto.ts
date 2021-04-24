import { IAccountContactInfo } from '../interfaces/IAccount';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContactInfoDto implements IAccountContactInfo {
  @ApiModelProperty()
  @IsString()
  readonly email: string;

  @ApiModelProperty()
  @IsString()
  readonly fb: string;

  @ApiModelProperty()
  @IsString()
  readonly phone: string;

  @ApiModelProperty()
  @IsString()
  readonly skype: string;

  @ApiModelProperty()
  @IsString()
  readonly vk: string;
}
