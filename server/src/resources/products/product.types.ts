interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Product extends BaseEntity {
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface ProductDto {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface CreateProductDto {
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface UpdateProductDto {
  name: string;
  price: number;
  description: string;
  stock: number;
}

export type { CreateProductDto, Product, ProductDto, UpdateProductDto };
