import {IInvoice} from "../interfaces/IInvoice";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {IsNumber, IsString} from "class-validator";

export class CreateInvoiceDto implements IInvoice {
    @ApiModelProperty()
    @IsNumber()
    amount: number;

    @ApiModelProperty()
    @IsNumber()
    readonly from: number;

    @ApiModelProperty()
    @IsNumber()
    readonly status: number;

    @ApiModelProperty()
    @IsNumber()
    readonly to: number;

}
