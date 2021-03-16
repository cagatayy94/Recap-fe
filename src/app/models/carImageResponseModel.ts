import { CarImageModel } from "./carImageModel";
import { ResponseModel } from "./responseModel";

export interface CarImageResponseModel extends ResponseModel{
    data:CarImageModel[]
}