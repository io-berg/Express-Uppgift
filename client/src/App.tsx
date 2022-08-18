import { Route, Routes } from "react-router-dom";
import AdminView from "./components/AdminView";
import Header from "./components/Header";
import ShopView from "./components/ShopView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/admin/edit/:id" element={<AdminView />} />
      </Routes>
    </div>
  );
}

export default App;
