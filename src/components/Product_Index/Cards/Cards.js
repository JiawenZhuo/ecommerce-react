import React, { useContext } from 'react';
// import axios from 'axios';
import { ContainerRow } from '../../Container/Container.js';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Card from './Card';
import { DataContext } from '../../DataProvider/DataProvider.js';

function Cards(){

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
 

    return(
        <ContainerRow>      
            {products.map((product)=>(
               <Card product={product} key={product.id} />
            ))}
        </ContainerRow>

    );
}
export default Cards;



