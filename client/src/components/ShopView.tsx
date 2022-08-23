import { Container, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Product } from "../types";
import { getAllProducts } from "../utils/apiCalls";
import ProductCard from "./ProductCard";

interface ShopViewProps {}

const ShopView: FC<ShopViewProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <Container>
      <div>
        <Typography variant="h6">Shop View</Typography>
      </div>
      <div className="product-grid">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </Container>
  );
};

export default ShopView;
