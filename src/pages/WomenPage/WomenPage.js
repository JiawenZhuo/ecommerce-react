import React from 'react';
import Cards from '../../components/Product_Index/Cards/Cards';
import Login from '../../components/Login/Login';
import useToken from '../../hooks/useToken';

function WomenPage() {
    const { token, setToken } = useToken();

    if(!token){
      return <Login setToken={setToken}/>
    }
    return (
        <div>
            <Cards />
        </div>
    );
}

export default WomenPage;