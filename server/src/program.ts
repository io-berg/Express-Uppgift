import express from "express";
import { CreateProductDto, TypedRequestBody, UpdateProductDto } from "./types";
import productService from "./productService";
import Cors from "cors";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./api.productsController";
import schemas from "./schemas";
import validator from "./validator";

productService.initialize();
const app = express();
app.use(express.json());
app.use(Cors());

app.get("/", getAllProducts);
app.get("/:id", getProductById);
app.post("/", validator(schemas.createProduct), updateProduct);
app.put("/", validator(schemas.updateProduct), addProduct);
app.delete("/", validator(schemas.deleteProduct), deleteProduct);

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
