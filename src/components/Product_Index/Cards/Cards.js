import React, { useContext, useEffect } from "react";
import axios from 'axios';
import { ContainerRow} from "../../Container/Container.js";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Card from "./Card";
import { DataContext } from "../../DataProvider/DataProvider.js";

function Cards({para,lowToHigh}) {
  // const url='http://localhost:8000/products';
  // const [products, setProducts] = useState([]);

  // const fetchItems = () => {
  //     axios.get(url)
  //     .then(res => {
  //         const data = res.data;
  //         // console.log(data);
  //         setProducts([...products,...data])
  //     })
  // }

  // useEffect(() =>{
  //     fetchItems();
  // },[])
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
