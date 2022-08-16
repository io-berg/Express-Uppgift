interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Product extends BaseEntity {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

interface ProductDto {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

type ProductTag =
  | "Fruit"
  | "Vegetable"
  | "Meat"
  | "Fish"
  | "Dairy"
  | "Frozen"
  | "Fresh"
  | "Organic";

interface AddProductRequest {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export { AddProductRequest, Product, TypedRequestBody, ProductDto };
