export default class ProductDto{
    code;
    name;
    price;

    constructor(data){
        this.code= data.code;
        this.name = data.name;
        this.price = data.price;
    }
}