import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class PhoneDto{
    @ApiModelProperty()
    readonly phone: string
}
