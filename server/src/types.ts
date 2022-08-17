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
  id: number;
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

interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

interface CreateProductDto {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

interface UpdateProductDto {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

export {
  CreateProductDto,
  Product,
  TypedRequestBody,
  ProductDto,
  UpdateProductDto,
  ProductTag,
};
