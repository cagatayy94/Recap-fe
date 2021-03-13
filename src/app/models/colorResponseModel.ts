import { Color } from "./colorModel";
import { ResponseModel } from "./responseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Color[]
}