import React, { useState} from "react";
import axios from "axios";
import { LogInCard, InputWrapper} from "./style";

function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [logIn,setLogIn] = useState();
    const [user, setUser] = useState();
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit =  (e) =>{
        axios.post("http://localhost:3001/accounts/login", 
        {   username: username, 
            password: password
        },
        {
            headers: {'Content-type': 'application/json'},
            withCredenticals: true
        }
        )        
        .then(function(response){
            if(response.status === 200){
                console.log("successful login");
                console.log(response.data);
                setUser(response.data);
                localStorage.setItem("user", response.data);
                setLogIn(true);
            }else{
                console.log("login fail");
            }
            const accessToken = response ? response.data.accessToken: null;
            const roles = response ?response.data.roles: null;
        })
        .catch(function(err){
            if(err ? err.response: false){
                setErrMsg('No server response');
            }else if (err? err.response.status: null === 401){
                setErrMsg('Login Failed');
            }
            console.log(err);
            console.log("fail"+JSON.stringify(username));
        });
        e.preventDefault();
    }
  return (
    <>
      
        {logIn ?   
                (<section>
                <h1>Success!</h1>
                </section>
            )
            :(
                <LogInCard>
                <h1>Please enter your login details</h1>
                <form onSubmit = {handleSubmit} style={{'display': 'flex', 'flex-direction': 'column','align-items': 'center'}}>
                    <InputWrapper><label htmlFor="username">Username</label>
                    <input type="text" onChange={e => setUserName(e.target.value)}/></InputWrapper>
                    <InputWrapper><label htmlFor="password">Password</label>
                    <input type="text" onChange={e => setPassword(e.target.value)}/></InputWrapper>
                    <div><button type="submit">Login</button></div>
                </form>
                </LogInCard>
          )
        }
    </>
  )
}

export default Login;