import { Product, ProductCreationModel } from "../types";

const BASE_URL = "http://localhost:3000/products/";

const getAllProducts = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

const addProduct = async (product: ProductCreationModel) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return response.status;
};

const getProductById = async (id: number) => {
  const response = await fetch(BASE_URL + id);
  const data = await response.json();
  return {
    responseCode: response.status,
    data,
  };
};

const updateProduct = async (id: number, product: ProductCreationModel) => {
  const response = await fetch(BASE_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response;
};

const deleteProduct = async (id: number) => {
  const response = await fetch(BASE_URL + id, {
    method: "DELETE",
  });
  return response;
};

export {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
