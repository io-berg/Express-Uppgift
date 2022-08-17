import { AppBar, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

interface HeaderProps {
  handleOpenAddProduct: () => void;
  loadProducts: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpenAddProduct, loadProducts }) => {
  return (
    <Container>
      <header className="flex justify-between">
        <Typography variant="h4">Products</Typography>
        <div className="header-button-group">
          <Button variant="contained" color="primary">
            Get Product By Id
          </Button>
          <Button color="success" variant="contained">
            Add Product
          </Button>
          <Button color="primary" variant="contained" onClick={loadProducts}>
            Load Products
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
