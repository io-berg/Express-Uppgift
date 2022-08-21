import express from "express";
import authorize from "../../middlewares/authorization";
import validator from "../../middlewares/validator";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./product.controller";
import schemas from "./product.schemas";

const productRouter = express
  .Router()
  .get("/", getAllProducts)
  .get("/:id", getProductById)
  .post("/", [authorize, validator(schemas.createProduct)], addProduct)
  .put("/:id", [authorize, validator(schemas.updateProduct)], updateProduct)
  .delete("/:id", authorize, deleteProduct);

export default productRouter;
