import React, { useState, useEffect } from "react";
import Cards from "../../components/Product_Index/Cards/Cards";
import ToolBar from "../../components/Product_Index/Cards/ToolBar";
import { ContainerRow } from "../../components/Container/Container";

function CollectionPage() {
  const [lowToHigh, setLowToHigh] = useState();

  useEffect(() => {
    console.log(lowToHigh);
  }, [lowToHigh]);

  return (
    <ContainerRow>
      <ToolBar setLowToHigh={setLowToHigh} />
      <Cards para="price" lowToHigh={lowToHigh} />
    </ContainerRow>
  );
}

export default CollectionPage;
