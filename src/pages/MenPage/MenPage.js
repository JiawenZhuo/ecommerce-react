import React from 'react';
import Cards from '../../components/Product_Index/Cards/Cards';
import Login from '../../components/Login/Login.js';
import useToken from '../../hooks/useToken';
function MenPage() {
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

export default MenPage;