import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {InitialDto} from "./InitialsDto";
import {InnDto} from "./InnDto";
import {PhoneDto} from "./PhpneDto";




export class CreatePersonDto {

    @ApiModelProperty({ example: 'RUS'})
    readonly nationality: string;

    @ApiModelProperty()
    @ApiProperty({ type: InitialDto })
    @Type(()=>InitialDto)
    readonly initials: InitialDto

    @ApiModelProperty()
    @ApiProperty({ type: InnDto })
    @Type(()=>InnDto)
    readonly inn: InnDto

    @ApiModelProperty()
    @ApiProperty({ type: PhoneDto })
    @Type(()=>PhoneDto)
    readonly phone: PhoneDto
}
