import { Route, Routes } from "react-router-dom";
import AdminView from "./components/private/AdminView";
import CreateView from "./components/private/CreateView";
import EditView from "./components/private/EditView";
import Header from "./components/public/Header";
import ProductView from "./components/public/ProductView";
import ShopView from "./components/public/ShopView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/admin/product/edit/:id" element={<EditView />} />
        <Route path="/admin/product/create" element={<CreateView />} />
      </Routes>
    </div>
  );
}

export default App;
