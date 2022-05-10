import React, {useState} from 'react'
import PropsTypes from 'prop-types';
import axios from "axios";


export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e =>{
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }


    async function loginUser(){
        axios.get("http://localhost:3001/accounts/login", {username, password} )
        .then(function(res){
            
        })
        .catch(function(err){
            console.log('wrong pwd')
        })
    }
  return (
    <>
    <h1>Please enter your login details</h1>
    <form onSubmit = {handleSubmit}>
        <label for="username"l>Username</label>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
        <label for="password">Password</label>
            <input type="text" onChange={e => setPassword(e.target.value)}/>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
  );
}


Login.propsTypes = {
    setToken: PropsTypes.func.isRequired
}