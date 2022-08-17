import { ProductCreationModel } from "../types";

const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json();
  return data;
};

const addProduct = async (product: ProductCreationModel) => {
  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export { getAllProducts, addProduct };
