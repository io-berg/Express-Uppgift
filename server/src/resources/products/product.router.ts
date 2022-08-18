import express from "express";
import validator from "../../middlewares/validator";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./product.controller";
import schemas from "./product.schemas";

const productRouter = express.Router()
.get("/", getAllProducts)
.get("/:id", getProductById)
.post("/", validator(schemas.createProduct), updateProduct)
.put("/", validator(schemas.updateProduct), addProduct)
.delete("/", validator(schemas.deleteProduct), deleteProduct)

export default productRouter;