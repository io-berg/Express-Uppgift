import express from "express";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";
import { AddProductRequest, Product, TypedRequestBody } from "./types";

let data: Product[] = [];
let nextId = 1;

function getId(): number {
  return nextId++;
}

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.post("/", (req, res) => {
  const { name, price, description, tags } = req.body;
  const product = {
    id: getId(),
    name,
    price,
    description,
    tags,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  data = [...data, product];
  res.status(201).json(product);
});

app.put("/", (req, res) => {
  const { id, updated } = req.body;
  const index = data.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const product = {
    id: id,
    name: updated.name,
    price: updated.price,
    description: updated.description,
    tags: updated.tags,
    createdAt: data[index].createdAt,
    updatedAt: new Date(),
  };

  data = [...data.slice(0, index), product, ...data.slice(index + 1)];

  res.status(200).json(product);
});

app.delete("/", (req, res) => {
  const { id } = req.body;
  const index = data.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  data = [...data.slice(0, index), ...data.slice(index + 1)];

  res.status(204).json();
});

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
