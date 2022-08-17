interface Product {
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

interface ProductCreationModel {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
}

export type { Product, ProductTag, ProductCreationModel };
