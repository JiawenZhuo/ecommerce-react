import styled from 'styled-components';
import {ReactComponent as CartIcon} from '../../assets/images/icon-cart.svg';
import React from 'react'

const CartButtonStyle = styled.div`
    Width: 21.82px; 
    Height: 20px;
    padding: 10px;
    cursor: pointer;
`
  
function CartButton({setOpened}){
  
    return(
        <CartButtonStyle>
            <CartIcon onClick={() => setOpened(current => !current)}/>
        </CartButtonStyle>
    );
}

export default CartButton;