import React, { useState} from "react";


export const CartContext = React.createContext();
export const CartProvider = (props) =>{
    const [cartItems, setCartItems] = useState([]);

    const value = {
        cartItems, 
        setCartItems,

    }
    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}