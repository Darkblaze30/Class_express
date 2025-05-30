import  express  from "express";

const categoriesRouter = express.Router();

categoriesRouter.get('/',(req, res) => {
    res.send('All categories')
})

categoriesRouter.get("/:id", (req, res) => {
  res.send(`categories with ID ${req.params.id}`);
});
categoriesRouter.post("/", (req, res) => {
  res.send(`Creating a new categories`);
});
categoriesRouter.patch("/:id", (req, res) => {
  res.send(`Updating categories with ID ${req.params.id}`);
});
categoriesRouter.delete("/:id", (req, res) => {
  res.send(`Deleting categories with ID ${req.params.id}`);
});

export default categoriesRouter;
