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
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export type { Product, ProductCreationModel };
