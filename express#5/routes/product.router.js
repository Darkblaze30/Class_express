import mongoose from 'mongoose';
import connectionMongo from "./main.js";

// const productRouter = express.Router()

const productSchema = new mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    active: Boolean
})

// const Product = mongoose.model('Product', productSchema)

const productRouter = connectionMongo('products', productSchema)

// productRouter.post("/", (req, res) => {
//   const product = new Product(req.body);
//   product
//     .save()
//     .then((doc) => res.send(doc))
//     .catch((err) => res.send(err));
// });

// productRouter.get("/", (req, res) => {
//   Product.find({})
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((error) => {
//       res.send('error:' + error);
//     });
// });
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