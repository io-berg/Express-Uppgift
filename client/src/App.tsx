import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShopView from "./components/ShopView";

function App() {
  return (
    <div className="App">
      <Header
        userType="user"
      />
      <Routes>
        <Route path="/" element={<ShopView  />} />
        <Route path="/edit" element={<ShopView  />} />
      </Routes>
    </div>
  );
}

export default App;
