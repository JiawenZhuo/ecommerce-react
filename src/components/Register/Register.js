import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import {RegisterCard, RegisterSection, InputWrapper, Button} from './style';

const inputStyle={
    color: "#555555", 
    cursor: 'pointer', 
    padding: "6px 14px",
    background: "#ffff",
}

function Register () {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const toLogin = () =>{
        navigate("/login");
    }


    const handleSumbit=(event) =>{
        const url = `${process.env.REACT_APP_URL}/users/new`
        axios.post(url, {
            username: user,
            password: pwd
        })
        .then(function(response){
            console.log(JSON.stringify(response));
        })
        .catch((err) =>{
            setErrMsg(err);
            console.log(err);
        })
    
        setSuccess(true);
        event.preventDefault();
    }


    useEffect(()=>{
        console.log(`${process.env.REACT_APP_URL}/users/new`);
    },[])
  return (
      <>
      {success ? (
          <section>
              <h1>Success!</h1>
              <p>
                <Button onClick ={toLogin}>login</Button>
              </p>
          </section>
      ):(
        <RegisterSection>
        <RegisterCard>
        <div>Get started with a free account</div>
        <div>Create a free account to make shopping easier</div>
        <form onSubmit={handleSumbit} style={{'display': 'flex', 'flexDirection': 'column','alignItems': 'center'}}>
            <InputWrapper>
            <label htmlFor="username">Username</label>
            <input 
                id="userame" 
                type="text" 
                // ref={useRef} 
                autoComplete="off" 
                onChange={e => setUser(e.target.value)}
                required
                // aria-invalid = {validName ? "false": "true"}
                aria-describedby = "uidnote"
                // onFocus={() => setUserFocus(true)}
                // onBlur = {() => setUserFocus(false)}
            ></input></InputWrapper>

            <InputWrapper><label htmlFor="password">Password</label>
            <input 
                id="password"
                type="text"
                autoComplete="off"
                req
                onChange={e => setPwd(e.target.value)}
            ></input></InputWrapper>
            <div><input type="submit" value="Sign Up" style={inputStyle}/></div>
        </form>
        <span style={{padding: "10px 0px 10px 0px"}}>already have a account ?</span>
        <Button onClick ={toLogin}>login</Button>
      </RegisterCard>
      </RegisterSection>
      )
    }       
      </>
  )
}

export default Register;