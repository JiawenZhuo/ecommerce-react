import React from 'react';
import { Link } from 'react-router-dom';
import { CompanyTag, NameTag, ShoeImg,CardStyle } from './style.js';
import { ShoeDes } from './style.js';

function Card({product}){
 
    return(
        <CardStyle>
            <Link to={{pathname: `/products/${product.id}`}}>
                <ShoeImg src={product.pictures[0]} />
            </Link>
        
            <ShoeDes>
                <CompanyTag>{product.company}</CompanyTag>
                <NameTag>{product.name}</NameTag>
                        {product.price}
            </ShoeDes>
        </CardStyle>
    )
}

export default Card;