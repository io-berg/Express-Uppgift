interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface ProductCreationModel {
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface ProductUpdateModel {
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface IAlert {
  id: number;
  type: AlertType;
  message: string;
}

type AlertType = "success" | "warning" | "error" | "info";

export type {
  Product,
  ProductCreationModel,
  ProductUpdateModel,
  AlertType,
  IAlert,
};
