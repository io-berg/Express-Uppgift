import { Container, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Product } from "../types";
import { getAllProducts } from "../utils/apiCalls";
import AdminProductTable from "./ProductTable/AdminProductTable";
import ProductTable from "./ProductTable/ProductTable";

interface AdminViewProps {}

const AdminView: FC<AdminViewProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <Container>
      <div className="flex justify-between">
        <Typography variant="h6">Admin View</Typography>
      </div>
      <AdminProductTable products={products} />
    </Container>
  );
};

export default AdminView;
