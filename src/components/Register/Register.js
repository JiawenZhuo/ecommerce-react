import React, {useState, useRef, useEffect} from 'react'

import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FrontAwesomeIcon} from "@fortawesome/free-regular-svg-icons";
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import axios from '../../api/axios';
import {RegisterCard,RegisterH1, RegisterSection, InputWrapper, FormWrapper} from './style';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


function Register () {

    // const userRef = useRef();
    // const errRef = useRef();

    const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() =>{
    //     userRef.current.focus();
    // }, []);


    // useEffect(()=>{
    //     const result = USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    // }, [user]);

    // useEffect(()=>{
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     const match = pwd === matchPwd;
    //     setValidMatch(result);
    // },[ pwd, matchPwd]);

    // useEffect(()=>{
    //     setErrMsg('');
    // },[user, pwd, matchPwd]);

    const handleSumbit=(event) =>{
        axios.post("http://localhost:3001/users/new", {
            username: user,
            password: pwd
        }).
        then(function(response){
            console.log("stringfy"+JSON.stringify(response.config.data));
            console.log(response.config.data);
        
        })
        .catch((err) =>{
            setErrMsg(err);
            console.log(err);
        })
            setSuccess(true);
        event.preventDefault();
    }


  return (
      <>
      {success ? (
          <section>
              <h1>Success!</h1>
              <p>
                  <a href="#">Sign In</a>
              </p>
          </section>
      ):(
        <RegisterSection>
      <RegisterCard>
        <RegisterH1>Get started with a free account</RegisterH1>
        <registerH1>Create a free account to make shopping easier</registerH1>
        <form onSubmit={handleSumbit}>
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
                onChange={e => setPwd(e.target.value)}
            ></input></InputWrapper>
            <input type="submit" value="Sign Up"/>
        </form>
      </RegisterCard>
      </RegisterSection>
      )
    }       
      </>
  )
}

export default Register;