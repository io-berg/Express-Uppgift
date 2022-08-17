import express from "express";
import { CreateProductDto, TypedRequestBody, UpdateProductDto } from "./types";
import productService from "./productService";
import Cors from "cors";

productService.initialize();

const app = express();
app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
  res.status(200).json(productService.getAll());
});

app.get("/:id", (req, res) => {
  const product = productService.getById(Number(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/", (req: TypedRequestBody<CreateProductDto>, res) => {
  const result = productService.add(req.body);

  if (result) {
    res.status(201).json(result);
  } else {
    res.status(400).json({
      message: "Invalid product data",
    });
  }
});

app.put("/", (req: TypedRequestBody<UpdateProductDto>, res) => {
  const result = productService.update(req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.delete("/", (req, res) => {
  const result = productService.delete(req.body.id);
  if (result) {
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
