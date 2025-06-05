import mongoose from 'mongoose';
import connectionMongo from "./main.js";
import express  from 'express';
import ProductDto from '../dtos/student.dto.js';

const productRouter = express.Router()

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);


const productSchema = new mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    active: Boolean
})

const Product = mongoose.model('Product', productSchema)

// const productRouter = connectionMongo('products', productSchema)

productRouter.post("/", (req, res) => {
  Product.insertOne({...(new ProductDto(req.body)), active: true})
    .then((doc) => res.send(doc))
    .catch((err) => res.send(err));
});

productRouter.get("/", (req, res) => {
  Product.find({})
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.send('error:' + error);
    });
});
// productRouter.get("/:_id", (req, res) => {
//   Product.find(req.params)
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });

// productRouter.put("/:_id", (req, res) => {
//   Product.updateOne(req.params, {$set: req.body})
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });

// productRouter.delete("/:_id", (req, res) => {
//   Product.updateOne(req.params)
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });


export default productRouter