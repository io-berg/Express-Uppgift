import { Request, Response } from "express";
import productService from "./product.service";

function getAllProducts(req: Request, res: Response) {
  res.status(200).json(productService.getAll());
}

function getProductById(req: Request, res: Response) {
  throw new Error("Method not implemented.");
  const product = productService.getById(Number(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}

function updateProduct(req: Request, res: Response) {
  const result = productService.add(req.body);

  if (result) {
    res.status(201).json(result);
  } else {
    res.status(400).json({
      message: "Invalid product data",
    });
  }
}

function addProduct(req: Request, res: Response) {
  const result = productService.update(req.body);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}

function deleteProduct(req: Request, res: Response) {
  const result = productService.delete(req.body.id);
  if (result) {
    res.status(200).json({ message: "Product deleted" });
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

