import fs from "fs";
import {
  CreateProductDto,
  Product,
  ProductDto,
  UpdateProductDto,
} from "./types";

const productsPath = "./data/products.json";
let products: Product[] = [];

const productService = {
  initialize: () => initialize(),
  getAll: () => getAll(),
  getById: (id: number) => getById(id),
  add: (product: CreateProductDto) => addProduct(product),
  update: (product: UpdateProductDto) => updateProduct(product),
  delete: (id: number) => deleteProduct(id),
};

function getId() {
  if (products.length === 0) {
    return 1;
  }
  return products[products.length - 1].id + 1;
}

function initialize() {
  if (!fs.existsSync(productsPath)) {
    fs.writeFileSync(productsPath, JSON.stringify([]));
  } else {
    products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  }
}

function getAll() {
  return products.map(mapDto);
}

function getById(id: number) {
  const product = products.find((p) => p.id === id);
  if (product) {
    return mapDto(product);
  }
  return null;
}

function addProduct(product: CreateProductDto) {
  const newProduct = {
    id: getId(),
    name: product.name,
    price: product.price,
    description: product.description,
    tags: product.tags,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  products = [...products, newProduct];
  saveProducts();
  return mapDto(newProduct);
}

function updateProduct(updated: UpdateProductDto) {
  const index = products.findIndex((p) => p.id === updated.id);
  if (index === -1) {
    return false;
  }

  const updatedProduct = {
    id: updated.id,
    name: updated.name,
    price: updated.price,
    description: updated.description,
    tags: updated.tags,
    createdAt: products[index].createdAt,
    updatedAt: new Date(),
  };

  products = [
    ...products.slice(0, index),
    updatedProduct,
    ...products.slice(index + 1),
  ];
  saveProducts();
  return mapDto(updatedProduct);
}

function deleteProduct(id: number) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return false;
  }
  products = [...products.slice(0, index), ...products.slice(index + 1)];
  saveProducts();
  return true;
}

function saveProducts() {
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 4));
}

function mapDto(product: Product): ProductDto {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    tags: product.tags,
  };
}

export default productService;
