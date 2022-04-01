import styled from 'styled-components';
import { Container } from '../Container/Container.js';
import {ReactComponent as ShoppingCart} from '../../assets/images/icon-cart.svg';

export const DescriptionWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start wrap;
    width: 50%;
    height: auto;
    /* margin-left: 80px; */
    margin-top: 60px;
    z-index: -1;
    /* border: 1px red solid; */
    margin-left: auto;
    margin-right: auto;
`

export const PrimaryTitleStyle = styled.h1`
    color: #1D2026;
    font-size: 36px;
    font-weight: 700;
    display: flex;
    flex-direction: wrap;
    align-items: flex-start;
    text-align: left;
    padding-top: 5px;
    /* border: 1px red solid; */
    overflow-wrap: break-word;
`
export const SecondaryTitleStyle = styled(PrimaryTitleStyle)`
    color: #FF7E1B;
    font-size: 13px;
    margin-bottom: none;
    padding:none;
    margin:none;
    overflow-wrap: break-word;
`

export const ParagraphStyle = styled(PrimaryTitleStyle)`
    color: #69707D;
    font-size: 13px;
    font-weight: 400;
    font-style: none;
    line-height: 131%;
    padding-bottom: 5px;
    max-width: 100%;
    overflow-wrap: break-word;
`


export const InlineContainer = styled.div`
        display: flex;
        flex-direction: row wrap;
        justify-content: flex-start;
        width: 40%;
`

export  const PriceStyle = styled.div`
        width: 51px;
        height: 27px;
        font-weight: 700;
        color: #1D2026;
        font-size: 28px;
        font-style: bold;
`

export  const Discount= styled.div`
        width: 50%;
        height: 13px;
        font-weight: 700;
        background-color: #FFEEE2;
        margin-left: 50%;
        /* border: solid 1px black;  */
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5% ;

        > .discountAmount {
            color: #FF7E1B;
            font-style: bold;
            font-size: 13px;
        }
`


export const OriginalPriceStyle = styled.div`
        color: #B6BCC8;
        text-decoration: line-through;
        text-align: left;
        margin-top: 10px;
`

export const AddButton = styled.div`
    border: none;
    color: #FFAB6A;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
`

export const PlusMinusContainer = styled.div`
    background-color: #F6F8FD;
    border: none;
    border-radius: 5%;
    width: 157px; 
    height: 50px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-around;
`

export const BodyFont = styled.p`
   font-family: 'Montserrat', sans-serif;
`;

export const AddToCharButton = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
        background-color: #FF7E1B;
        margin-left: 10px;
        height: 50px;
        width: 160px;
        color: #FFFFFF;
        font-weight: bold;
        border: none;
        border-radius: 5%;
        font-size: 12px;
        flex-grow: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            opacity: 0.8 ;
        }
        cursor: pointer;
`      

export const CartIcon = styled(ShoppingCart)`
    Width: 20px; 
    Height: 20px;
    margin:3px;
    color: #FFFFFF;
`

export const AddToCartContainer = styled(Container)`
    align-items: stretch;
    border: none;
    width: 100%;
`

export const ButtonText = styled.div`
    font-size: 15px;
    margin-left: 5px;
`