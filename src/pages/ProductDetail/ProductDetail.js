import React from 'react';

import  {Container}  from '../../components/Container/Container';
import ImageGroup from '../../components/ImageGroup/ImageGroup';
import ProductionDescription from '../../components/ProductDescription/ProductDescription';

function ProductDetail({setCartCount,cartCount}){

    return(
        <Container>
            <ImageGroup />
            <ProductionDescription setCartCount={setCartCount} cartCount = {cartCount}/>
        </Container>
    )
}
export default ProductDetail;