import { Route, Routes } from "react-router-dom";
import AdminView from "./components/AdminView";
import EditView from "./components/EditView";
import Header from "./components/Header";
import ProductView from "./components/ProductView";
import ShopView from "./components/ShopView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/admin/edit/:id" element={<EditView />} />
      </Routes>
    </div>
  );
}

export default App;
