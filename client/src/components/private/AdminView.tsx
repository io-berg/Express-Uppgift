import { Button, Container, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types";
import { getAllProducts } from "../../utils/apiCalls";
import AdminProductTable from "./AdminProductTable";

interface AdminViewProps {}

const AdminView: FC<AdminViewProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const fetchProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="flex justify-between mb-1">
        <Typography variant="h6">Admin View</Typography>
        <Button
          color="success"
          variant="contained"
          sx={{ marginBottom: "4px" }}
          onClick={() => {
            navigate("/admin/product/create");
          }}
        >
          Add Product
        </Button>
      </div>
      <AdminProductTable products={products} updateProducts={fetchProducts} />
    </Container>
  );
};

export default AdminView;
