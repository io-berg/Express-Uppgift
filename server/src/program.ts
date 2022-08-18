import Cors from "cors";
import express from "express";
import logger from "./middlewares/logger";
import orderRouter from "./resources/orders/order.router";
import productRouter from "./resources/products/product.router";
import productService from "./resources/products/product.service";

productService.initialize();
const app = express();
app.use(express.json());
app.use(Cors());
app.use(logger);
app.use("/products", productRouter)
app.use("/orders", orderRouter)


app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
