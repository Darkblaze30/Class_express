import express from "express";
import {main} from './../../../helpers/db.js'
import {ProductsController} from "./index.js";

const db = await main()
const productsRouter = express.Router();
const roductController = new ProductsController(db)

productsRouter.get('/',  roductController.getAll)
productsRouter.get('/:id',  roductController.getById)
productsRouter.post('/',  roductController.create)
productsRouter.patch('/:id',  roductController.update)
productsRouter.delete('/:id',  roductController.delete)

export default productsRouter