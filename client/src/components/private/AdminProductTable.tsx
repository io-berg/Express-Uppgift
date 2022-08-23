import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types";
import { useAlerts } from "../../utils/AlertContext";
import { deleteProduct } from "../../utils/apiCalls";

interface AdminProductTableProps {
  products: Product[];
  updateProducts: () => void;
}

const ProductTable: FC<AdminProductTableProps> = ({
  products,
  updateProducts,
}) => {
  const navigate = useNavigate();
  const alertContext = useAlerts();

  const handleDelete = async (id: number) => {
    const result = await deleteProduct(id);
    if (result.status === 204) {
      alertContext.addAlert("Product deleted successfully", "success");
      updateProducts();
    } else {
      alertContext.addAlert("Failed to delete product", "error");
    }
  };

  return (
    <TableContainer component={Paper} sx={{ overflow: "auto" }}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell align="center">Actions</TableCell>
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
                <TableCell>{product.stock}</TableCell>
                <TableCell align="center">
                  <div className="flex center">
                    <IconButton
                      size="small"
                      color="warning"
                      sx={{ marginRight: "4px" }}
                      onClick={() =>
                        navigate(`/admin/product/edit/${product.id}`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(product.id)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
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
