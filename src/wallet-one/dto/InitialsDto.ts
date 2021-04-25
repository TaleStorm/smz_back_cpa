import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class InitialDto {
    @ApiModelProperty()
    readonly firstName: string

    @ApiModelProperty()
    readonly lastName: string

    @ApiModelProperty()
    readonly patronymic: string
}
