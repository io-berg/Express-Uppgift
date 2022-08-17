import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import { getAllProducts } from "./utils/apiCalls";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const productList = products.map((product, index) => {
    return (
      <div key={index}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <ul>
          {product.tags.map((tag, index) => {
            return <li key={index}>{tag}</li>;
          })}
        </ul>
      </div>
    );
  });

  return <div className="App">{productList}</div>;
}

export default App;
