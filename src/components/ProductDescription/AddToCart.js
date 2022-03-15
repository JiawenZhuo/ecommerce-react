import React, { useEffect, useState } from "react";
import { AddButton, AddToCharButton, AddToCartContainer, PlusMinusContainer, CartIcon, ButtonText,BodyFont } from "./ProductDescription.element.js";

function AddToCart({handleCartItems, detail}){

    let [count, setCount] = useState(0);

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