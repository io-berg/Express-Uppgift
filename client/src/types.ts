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

interface ProductTableProps {
  products: Product[];
}

export type { Product, ProductTag, ProductTableProps };
