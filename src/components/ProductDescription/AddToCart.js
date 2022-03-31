import React, { useState, useContext } from "react";
import { CartContext } from "../../hooks/useShoppingCart/useShoppingCart.js";
import { AddButton, AddToCharButton, AddToCartContainer, PlusMinusContainer, CartIcon, ButtonText,BodyFont } from "./ProductDescription.element.js";

function AddToCart({detail}){

    let [count, setCount] = useState(0);
    const {cartItems, setCartItems} = useContext(CartContext);

    function incrementCount(){
        count = count +1;
        setCount(count);
    }

    function decrementCount(){
        if(count >= 1) {
            count = count -1;
        }else{
            count = 0;
        }
        setCount(count);
    }
    function handleCartItems({ product, addCount }) {
        const exist = cartItems.some((item) => item.id === product.id);
        console.log(exist);
        const addNewItems = ({ product, addCount }) => {
          setCartItems([...cartItems, { ...product, qty: addCount }]);
        };
        const addOldItems = ({ product, addCount }) => {
          setCartItems(
            cartItems.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + addCount } : item
            )
          );
        };
        if (!exist) {
          console.log(exist);
          console.log("add new");
          addNewItems({ product, addCount });
        } else {
          console.log("add old");
          addOldItems({ product, addCount });
        }
      }
    function addToCartAction(){
        handleCartItems({product:detail, addCount:count});
        setCount(0);
    }

    return(
        <AddToCartContainer>
            <PlusMinusContainer>
                <AddButton onClick={incrementCount}>+</AddButton>
                <div><BodyFont>{count}</BodyFont></div>
                <AddButton onClick={decrementCount}>-</AddButton>
            </PlusMinusContainer>

            <AddToCharButton onClick={addToCartAction}><CartIcon /><ButtonText>Add to Cart</ButtonText></AddToCharButton>
        </AddToCartContainer>
    );
}


export default AddToCart;