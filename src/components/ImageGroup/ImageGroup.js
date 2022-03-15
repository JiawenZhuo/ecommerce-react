import { ImageWrapper, ImgDiv, StyledImageMain } from "./ImageGroup.elements.js";
import { StyledImageSelector,Gallary } from "./ImageGroup.elements.js";
import React, { useState } from "react";


function MainImage (props) {

    return (
        <StyledImageMain src={props.src} />
    )
}

function ImageGroup({images}){
    const [mainImg , setMainImg] = useState(images[0]);
    
    const ProductShowCase = () => (
        <Gallary>
            {images.map((image)=>(
                 <ImgDiv key={image.toString()}><StyledImageSelector src={image}  onClick={()=> setMainImg(image)}/></ImgDiv>
            ))}
        </Gallary>
    )

    return(
        <ImageWrapper>
         <div>
            <MainImage src={mainImg} />
         </div> 
        <ProductShowCase />
        </ImageWrapper>
    );
}

export default ImageGroup;
