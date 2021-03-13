import { Car } from "./carModel";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[]
}