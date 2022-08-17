import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import { Product } from "./types";
import { getAllProducts } from "./utils/apiCalls";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="App">
      <Container>
        <ProductTable products={products} />
      </Container>
    </div>
  );
}

export default App;
