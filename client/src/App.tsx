import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AlertsContainer from "./components/AlertsConatiner";
import Header from "./components/Header";
import AdminView from "./components/private/AdminView";
import CreateView from "./components/private/CreateView";
import EditView from "./components/private/EditView";
import ProductView from "./components/ProductView";
import ShopView from "./components/ShopView";
import { AlertType, IAlert } from "./types";
import { AlertProvider } from "./utils/AlertContext";

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Header />
        <AlertsContainer />
        <Routes>
          <Route path="/" element={<ShopView />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/admin/product/edit/:id" element={<EditView />} />
          <Route path="/admin/product/create" element={<CreateView />} />
        </Routes>
      </AlertProvider>
    </div>
  );
}

export default App;
