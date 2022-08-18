import Cors from "cors";
import express from "express";
import errorHandler from "./middlewares/errorHandler";
import logger from "./middlewares/logger";
import notFoundHandler from "./middlewares/notFoundHandler";
import orderRouter from "./resources/orders/order.router";
import productRouter from "./resources/products/product.router";
import productService from "./resources/products/product.service";

productService.initialize();
const app = express();

app.use(express.json());
app.use(Cors());
app.use(logger);

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
