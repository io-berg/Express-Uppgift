import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import EditProductDialog from "./components/EditProductDialog";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import { Product, ProductCreationModel } from "./types";
import { addProduct, getAllProducts } from "./utils/apiCalls";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editProduct, setEditProduct] = useState<Product>();
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleLoadProducts = () => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  };

  const handleOpenEdit = (product: Product) => {
    setEditProduct(product);
  };

  const handleCloseEdit = () => {
    setEditProduct(undefined);
  };

  const handleAddProduct = (product: ProductCreationModel) => {};

  return (
    <div className="App">
      <Header
        handleOpenAddProduct={() => setShowAddProduct(true)}
        loadProducts={handleLoadProducts}
      />
      <Container>
        <ProductTable
          products={products}
          handleOpenEdit={handleOpenEdit}
          showAddProduct={showAddProduct}
          handleCloseAddProduct={() => setShowAddProduct(false)}
          addProduct={handleAddProduct}
        />
      </Container>
      <EditProductDialog product={editProduct} handleClose={handleCloseEdit} />
    </div>
  );
}

export default App;
