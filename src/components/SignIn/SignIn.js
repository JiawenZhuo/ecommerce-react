import React, {useEffect, useState} from "react";
import axios from "axios";

function SignIn() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit =  (e) =>{
        axios.get("http://localhost:3001/accounts/login", 
        {   username: username, 
            password: password
        })
        .then(function(response){
            if(response.data.message === "login success"){
                console.log("successful login");
            }else{
                console.log("fail");
            }
            console.log("stringfy"+JSON.stringify(response))
        })
        .catch(function(err){
            console.log(err);
            console.log("fail"+JSON.stringify(username));
        });
        e.preventDefault();
    }


    useEffect(() =>{
        console.log(username, password);
    })
  return (
    <>
    <h1>Please enter your login details</h1>
    <form onSubmit = {handleSubmit}>
        <label htmlFor="username">Username</label>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
        <label htmlFor="password">Password</label>
            <input type="text" onChange={e => setPassword(e.target.value)}/>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default SignIn