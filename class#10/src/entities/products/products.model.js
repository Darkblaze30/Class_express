export default class Products {

    #products;

    constructor(db) {
        this.#products = db.collection('products');
    }

    async getAll() {
        return this.#products.find().toArray();
    }

    async getById(_id) {
        return this.#products.findOne(_id);
    }

    async create(product) {
        return this.#products.insertOne(product);
    }

    async update(_id, data) {
        return this.#products.updateOne({_id}, {$set: data});
    }

    async delete(_id) {
        return this.#products.deleteOne({_id});
    }
};
