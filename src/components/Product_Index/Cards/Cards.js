import React, { useContext, useEffect } from "react";
// import axios from 'axios';
import { ContainerRow, Container } from "../../Container/Container.js";
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
  const [products, setProducts] = useContext(DataContext);

  // function conditionalSort(select){
  //   switch(select){
  //     case 'Price high to low':
  //        para = price;
  //        largerThan = 1;
  //        lessThan = -1;
  //       break;
  //     case 'Price low to high':
  //       para = price;
  //       largerThan = 1;
  //       lessThan = -1;
  //       break;
  //   }
  // }
  // useEffect(() =>{
  //   const conditionalSort=(select)=>{
  //     let para;
  //     let largerThan;
  //     let lessThan ;
  //     switch(select){
  //       case 'Price high to low':
  //          para = "price";
  //          largerThan = 1;
  //          lessThan = -1;
  //         break;
  //       case 'Price low to high':
  //         para = "price";
  //         largerThan = 1;
  //         lessThan = -1;
  //         break;
  //     }
  //   }
  //   conditionalSort(select);
  // }, [select])


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
