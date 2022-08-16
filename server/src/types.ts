type BaseEntity = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

type Product = BaseEntity & {
  name: string;
  price: number;
  description: string;
  tags: ProductTag[];
};

type ProductTag =
  | "Fruit"
  | "Vegetable"
  | "Meat"
  | "Fish"
  | "Dairy"
  | "Frozen"
  | "Fresh"
  | "Organic";
