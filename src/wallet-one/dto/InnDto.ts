import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class InnDto {
    @ApiModelProperty()
    readonly inn: string
}
