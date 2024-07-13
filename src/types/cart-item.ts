import { TProduct } from "./product";

export type TCartItem={
    id:string;
    quantity:number;
    product:TProduct;
    totalPrice:number;
    createdAt:string;
}