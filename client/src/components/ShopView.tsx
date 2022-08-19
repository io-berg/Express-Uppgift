import { Container, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Product } from "../types";
import { getAllProducts } from "../utils/apiCalls";
import ProductTable from "./ProductTable/ProductTable";

interface ShopViewProps {}

const ShopView: FC<ShopViewProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [openConfirmPurchase, setOpenConfirmPurchase] =
    useState<boolean>(false);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <Container>
      <div>
        <Typography variant="h6">Shop View</Typography>
      </div>
      <ProductTable products={products} />
    </Container>
  );
};

export default ShopView;
