export interface ProductProps{
    brand:string;
    catagory:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
}

export interface StoreProduct{
    brand:string;
    catagory:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:number;
}

export interface StateProps{
    productData:[];
    favouriteData:[];
    userInfo:null | string;
    next:any;


}