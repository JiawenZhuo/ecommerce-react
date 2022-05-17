import React, { useContext } from "react";
import { ContainerRow} from "../../Container/Container.js";
import Card from "./Card";
import { DataContext } from "../../DataProvider/DataProvider.js";

function Cards({para,lowToHigh}) {

  const {products} = useContext(DataContext);


  return (
      <ContainerRow para={para} lowToHigh = {lowToHigh}>
        
        {
        products
        .sort((a, b) => parseInt(a[`${para}`]) < parseInt(b[`${para}`]) ? Math.abs(lowToHigh): -Math.abs(lowToHigh))
        .map((product) => (
          <Card product={product} key={product.id} />
        ))
      }
        
      </ContainerRow>
  );
}
export default Cards;
