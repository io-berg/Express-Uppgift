import fs from "fs";
import {
  CreateProductDto,
  Product,
  ProductDto,
  UpdateProductDto,
} from "./product.types";
import util from "util";

const productsPath = "./data/products.json";
const readFile = util.promisify(fs.readFile);

const productService = {
  getAll: () => getAll(),
  getById: (id: number) => getById(id),
  add: (product: CreateProductDto) => addProduct(product),
  update: (product: UpdateProductDto) => updateProduct(product),
  delete: (id: number) => deleteProduct(id),
};

async function getId() {
  let products: Product[] = await fetchProducts();
  return products.length > 0 ? products[products.length - 1].id + 1 : 1;
}

async function getAll() {
  let products: Product[] = await fetchProducts();

  return products.map((p) => mapDto(p));
}

async function getById(id: number) {
  let products: Product[] = await fetchProducts();

  const product = products.find((p) => p.id === id);
  if (product) {
    return mapDto(product);
  }
  return null;
}

async function addProduct(product: CreateProductDto) {
  let products: Product[] = await fetchProducts();

  const newProduct: Product = {
    id: await getId(),
    name: product.name,
    price: product.price,
    description: product.description,
    stock: product.stock,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  saveProducts([...products, newProduct]);
  return mapDto(newProduct);
}

async function updateProduct(updated: UpdateProductDto) {
  let products: Product[] = await fetchProducts();

  const index = products.findIndex((p) => p.id === updated.id);
  if (index === -1) {
    return false;
  }

  const updatedProduct: Product = {
    id: updated.id,
    name: updated.name,
    price: updated.price,
    description: updated.description,
    stock: updated.stock,
    createdAt: products[index].createdAt,
    updatedAt: new Date(),
  };

  saveProducts([
    ...products.slice(0, index),
    updatedProduct,
    ...products.slice(index + 1),
  ]);

  return mapDto(updatedProduct);
}

async function deleteProduct(id: number) {
  let products: Product[] = await fetchProducts();

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return false;
  }

  saveProducts([...products.slice(0, index), ...products.slice(index + 1)]);
  return true;
}

function saveProducts(products: Product[]) {
  fs.writeFile(productsPath, JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

async function fetchProducts() {
  return await JSON.parse((await readFile(productsPath, "utf8")).toString());
}

function mapDto(product: Product): ProductDto {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    stock: product.stock,
  };
}

export default productService;
