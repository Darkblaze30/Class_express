import {Products} from "./index.js";
import {ObjectId} from "mongodb";

export default class ProductsController {
    #productsModel;

    constructor(db){
        this.#productsModel = new Products(db)
        // el bind me sirve para pasarle el this al getAll pq al usar la asincronia se pierde el this
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res){
        const products = await this.#productsModel.getAll();
        res.json(products)
    }
    async getById(req, res){
        const _id = ObjectId.createFromHexString(req.params.id)
        const products = await this.#productsModel.getById(_id);
        res.json(products)
    }
    async create(req, res){
        const products = await this.#productsModel.create(req.body);
        res.json(products)
    }
    async update(req, res){
        const _id = ObjectId.createFromHexString(req.params.id)
        const products = await this.#productsModel.update( _id, req.body);
        res.json(products)
    }
    async delete(req, res){
        const _id = ObjectId.createFromHexString(req.params.id)
        const products = await this.#productsModel.delete(_id);
        res.json(products)
    }
    
};
