import './App.css';
import { useState } from 'react';
import { StyledLine } from './components/Navigations/style.js';
import Cart from './components/Cart/Cart.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail.js';
import Cards from './components/Product_Index/Cards/Cards.js'
import {DataProvider} from './components/DataProvider/DataProvider.js';
import Navigation from './components/Navigations/Navigation.js'

function App() {

  const [opened, setOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleCartItems({product, addCount}){

    const exist = cartItems.some((item) => item.id === product.id);
    console.log(exist);
    const addNewItems = ({product, addCount}) =>{
      setCartItems([...cartItems,{...product, qty: addCount}]);
    }
    const addOldItems = ({product, addCount}) => {
        setCartItems(cartItems.map(
          (item) => item.id === product.id ? {...item, qty: item.qty+ addCount} : item
        )
      )
    }
    if (!exist){
      console.log(exist);
      console.log("add new");
      addNewItems({product, addCount})
    }else{
      console.log("add old");
      addOldItems({product, addCount})
    }
}

  return (
    <DataProvider>
      <Router>
          <Navigation setOpened={setOpened} opened={opened}/>
          <StyledLine />
      
        <Routes>
          <Route path="/" exact element={<Cards />}></Route>
          <Route path="/products/:id" element={<ProductDetail handleCartItems={handleCartItems}/>}></Route>
        </Routes>
         <Cart opened={opened}  cartItems={cartItems}/>
      </Router>
    </DataProvider>
  );
}

export default App;
