import {
  DescriptionWrapper,
  OriginalPriceStyle,
  ParagraphStyle,
  PrimaryTitleStyle,
  SecondaryTitleStyle,
  InlineContainer,
  PriceStyle,
  Discount
} from "./ProductDescription.element.js";
import React, { useEffect } from "react";
import AddToCart from "./AddToCart.js";

function ProductionDescription({detail}) {

  return (
    <div>
        <DescriptionWrapper>
          <SecondaryTitleStyle>{detail.company}</SecondaryTitleStyle>
          <PrimaryTitleStyle>{detail.name}</PrimaryTitleStyle>
          <ParagraphStyle>{detail.des}</ParagraphStyle>
          <InlineContainer>
            <PriceStyle>{detail.price}</PriceStyle>
            <Discount><p className="discountAmount">{detail.discount}</p></Discount>
          </InlineContainer>
          <OriginalPriceStyle>{detail.original_price}</OriginalPriceStyle>
          <AddToCart detail={detail} />
        </DescriptionWrapper>
    
    </div>
  );
}

export default ProductionDescription;
