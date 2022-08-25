import { Request, Response } from "express";
import productService from "./product.service";

async function getAllProducts(req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}

async function getProductById(req: Request, res: Response) {
  const product = await productService.getById(Number(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}

async function updateProduct(req: Request, res: Response) {
  const result = await productService.update(Number(req.params.id), req.body);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({
      message: "Product not found",
    });
  }
}

async function addProduct(req: Request, res: Response) {
  const result = await productService.add(req.body);
  if (result) {
    res.status(201).json(result);
  } else {
    res.status(500).json({ message: "Error adding product" });
  }
}

async function deleteProduct(req: Request, res: Response) {
  const result = await productService.delete(Number(req.params.id));
  if (result) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
