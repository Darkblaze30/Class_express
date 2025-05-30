import  express  from "express";

const productRouter = express.Router();

productRouter.get('/',(req, res) => {
    res.send('All products')
})

productRouter.get("/:id", (req, res) => {
  res.send(`Product with ID ${req.params.id}`);
});
productRouter.post("/", (req, res) => {
  res.send(`Creating a new product`);
});
productRouter.patch("/:id", (req, res) => {
  res.send(`Updating product with ID ${req.params.id}`);
});
productRouter.delete("/:id", (req, res) => {
  res.send(`Deleting product with ID ${req.params.id}`);
});

export default productRouter;
