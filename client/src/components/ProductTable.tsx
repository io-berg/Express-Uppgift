import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FC } from "react";
import { Product, ProductCreationModel } from "../types";

interface ProductTableProps {
  products: Product[];
  handleOpenEdit: (product: Product) => void;
  showAddProduct: boolean;
  addProduct: (product: ProductCreationModel) => void;
  handleCloseAddProduct: () => void;
}

const ProductTable: FC<ProductTableProps> = ({
  products,
  handleOpenEdit,
  showAddProduct,
  addProduct,
  handleCloseAddProduct,
}) => {
  const onAddProduct = () => {
    addProduct({
      name: "On Hand Product",
      description: "This is a product that is on hand",
      price: 100,
      tags: ["Fresh"],
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  {product.tags.map((tag, index) => {
                    return <li key={index}>{tag}</li>;
                  })}
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <Button
                      sx={{ marginRight: "5px" }}
                      variant="contained"
                      onClick={() => handleOpenEdit(product)}
                    >
                      Edit
                    </Button>
                    <Button color="error" variant="contained">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
