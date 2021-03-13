import { Rental } from "./rentalModel";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}