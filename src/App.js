import "./App.css";
import { useState} from "react";
import { StyledLine } from "./components/Navigations/style.js";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";
import Cards from "./components/Product_Index/Cards/Cards.js";
import { DataProvider } from "./components/DataProvider/DataProvider.js";
import Navigation from "./components/Navigations/Navigation.js";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import MenPage from "./pages/MenPage/MenPage";
import Login from "./components/Login/Login.js"
import useToken from "./hooks/useToken.js";
import {CartProvider} from "./hooks/useShoppingCart"
import WomenPage from "./pages/WomenPage/WomenPage";

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
        </Routes>
        <Cart opened={opened} />
      </Router>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
