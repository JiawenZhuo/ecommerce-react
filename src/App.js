import "./App.css";
import { StyledLine } from "./components/Navigations/style.js";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{ useState} from "react";
import ProductDetail from "./components/ProductDetail";
import { DataProvider } from "./components/DataProvider/DataProvider.js";
import Navigation from "./components/Navigations/Navigation.js";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import MenPage from "./pages/MenPage/MenPage";
import {CartProvider} from "./hooks/useShoppingCart"
import WomenPage from "./pages/WomenPage/WomenPage";
import Register from "./components/Register/Register";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <DataProvider>
      <CartProvider>
      <Router>
        <Navigation setOpened={setOpened} opened={opened} />
        <StyledLine />
        <Routes>
          <Route path="/" exact element={<CollectionPage />}></Route>
          <Route path="/men" element={<MenPage />}></Route>
          <Route path="/women" element={<WomenPage />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Cart opened={opened} />
      </Router>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
