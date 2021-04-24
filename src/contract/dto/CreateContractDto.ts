import { IContract } from '../interfaces/IContract';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNumber, IsString } from 'class-validator';

type IContractCreate = Omit<IContract, 'createAt' | 'updateAt'>;
export class CreateContractDto implements IContractCreate {
  @ApiModelProperty()
  @IsString()
  contractDescription: string;

  @ApiModelProperty()
  @IsString()
  contractImageLink: string;

  @ApiModelProperty()
  @IsString()
  contractName: string;

  @ApiModelProperty()
  @IsNumber()
  contractOwnerId: number;

  @ApiModelProperty()
  @IsNumber()
  contractPrice: number;

  @ApiModelProperty()
  @IsNumber()
  contractType: number;

  // @ApiModelProperty()
  @IsString()
  contractUuid: string;

  @ApiModelProperty()
  @IsString()
  contractStatus: number;
}
