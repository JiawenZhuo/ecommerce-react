import React, {useEffect, useState} from "react";
import axios from "axios";

function SignIn() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [logIn, setLogIn] = useState(false);
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
                setLogIn(true);
            }else{
                console.log("fail");
            }
            const accessToken = response ? response.data.accessToken: null;
            const roles = response ?response.data.roles: null;
            console.log("stringfy"+JSON.stringify(response))
            console.log("status"+JSON.stringify(accessToken))
        })
        .catch(function(err){
            if(err ? err.response: false){
                setErrMsg('No server response');
            }else if (err? err.response.status: null === 400){
                setErrMsg('Missing username or password');
            }else if (err? err.response.status: null === 401){
                setErrMsg('Login Failed');
            }
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
        {logIn ?   
                (<section>
                <h1>Success!</h1>
                </section>
            )
            :(
                <div>
                <h1>Please enter your login details</h1>
                <form onSubmit = {handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                <input type="text" onChange={e => setPassword(e.target.value)}/>
                <div><button type="submit">Submit</button></div>
                </form>
                </div>
          )
        }
    </>
  )
}

export default SignIn