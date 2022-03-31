import { Container } from "../Container/Container.js"
import ImageGroup from "../ImageGroup/ImageGroup.js"
import ProductionDescription from "../ProductDescription/ProductDescription.js"
import React, { useContext }  from 'react';
import {useParams} from 'react-router-dom';
import { DataContext } from "../DataProvider/DataProvider.js";

function ProductDetail(){

    const {id} = useParams();
    const {products}= useContext(DataContext);

    const details = products.filter((product) =>{
        return (product.id).toString() === id.toString();
    })


    return(
        <>
         {
            details.map((detail)=>(
            <Container key={detail.id}>
                 <ImageGroup images={detail.pictures}/>
                 <ProductionDescription detail={detail} />
            </Container>
            ))
         }
         </>
    )
}
export default ProductDetail;