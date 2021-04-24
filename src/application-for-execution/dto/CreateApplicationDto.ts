import { IApplication } from '../interfaces/IApplication';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber } from 'class-validator';

export class CreateApplicationDto implements IApplication {
  @ApiModelProperty()
  @IsNumber()
  readonly accountExecutorId: number;

  @ApiModelProperty()
  @IsNumber()
  readonly applicationStatus: number;

  @ApiModelProperty()
  @IsNumber()
  readonly contractId: number;
}
