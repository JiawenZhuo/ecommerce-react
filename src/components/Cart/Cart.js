import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import CartCard from './CartCard.js';
import { CartContext } from '../../hooks/useShoppingCart/useShoppingCart.js';

export const CartWrapper = styled.div`
    display: ${props => props.cartOpened  ? 'flex' : 'none'};
    box-shadow: rgba(149, 157, 165, 0.2) 5px 8px 24px;
    z-index: 30;
    position: absolute;
    top: 100px;
    right: 100px;
    display: flex; 
    flex-direction: column;
    width: 300px;
    height:auto;
`
export const CartTitle = styled.span`
    size: 16px;
    align-self: flex-start;
    padding: 10px;
    font-weight: 700;
    color: #1D2026;
`

export const CartLine = styled.hr`
    width: 100%;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
export const CartInfoWrapper = styled.div`
    display: flex; 
    justify-content: flex-start;
    flex-direction: row;
`
export const CartImg = styled.img`
    width: 45px;
    height: 45px;
    background-color: red;
    margin: 10px;
    border-radius: 5px;
`
export const CartText = styled.span`
    font-family:'Kumbh Sans';
    color: #69707D;
    font-size: 14px;
    padding: 0;
    margin: 0;
    padding-left: ${props => props.total ? "5px": "none"};
    font-weight: ${props => props.total ? "600": "none"};
    color: ${props => props.total ? "#1D2026" : "#69707D"};
`
export const Separator = styled.span`
    padding: 0 4px;
`
export const NameAndPriceWrapper = styled.div`
    display: flex; 
    justify-content: flex-start;
    flex-direction: column;
    height: 45px;
    width: 80%;
`
export const CheckOutButton = styled.button`
    width: 80%;
    height: 50px;
    margin:5%;
    background-color: #FF7E1B;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 1000;
    font-family: 'Kumbh Sans';
`

const EmptyCart = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CartWithItems= ({opened}) =>{
    const {cartItems} = useContext(CartContext);
    return(
        <div>
        {
            cartItems.map((cartItem)=> (
                <CartCard cartItem={cartItem} key={cartItem.id} />
                )
            )
        }
        <CheckOutButton opened={opened}>Checkout</CheckOutButton>
        </div>
    )
}

function Cart({opened}){

    const {cartItems} = useContext(CartContext);

    var cartElement;
    if( cartItems.length ===0 ){
        cartElement = <EmptyCart><span>Your cart is Empty</span></EmptyCart>;
    }else{
        cartElement = <CartWithItems opened={opened}/>
    }

    return(

        <div opened={opened ? 1 : 0} >
        {
        opened ? 
        <CartWrapper>
                <CartTitle>Cart</CartTitle>
            <CartLine />
            {cartElement}
        </CartWrapper>
        : null }
        </div>
    );
}

export default Cart;