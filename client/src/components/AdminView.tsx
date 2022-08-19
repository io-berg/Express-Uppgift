import { Button, Container, Typography } from "@mui/material";
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
      <div className="flex justify-between mb-1">
        <Typography variant="h6">Admin View</Typography>
        <Button
          color="success"
          variant="contained"
          sx={{ marginBottom: "4px" }}
        >
          Add Product
        </Button>
      </div>
      <AdminProductTable products={products} />
    </Container>
  );
};

export default AdminView;
