import { IAuth } from '../interfaces/IAuth';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber, IsString } from 'class-validator';

export class CreateAuthDto implements IAuth {
  @ApiModelProperty()
  @IsString()
  readonly email: string;

  @ApiModelProperty()
  @IsNumber()
  readonly vkId: number;
}
