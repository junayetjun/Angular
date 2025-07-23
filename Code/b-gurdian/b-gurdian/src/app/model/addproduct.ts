export class AddProductModel{
    id?: string;
    productName: string;


    constructor(id: string, productName: string){
        this.id = id;
        this.productName = productName;
    }
}