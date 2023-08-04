import React, { useState } from 'react';
import { auth } from "./FirebaseConfig";
import "../App.css";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();

    const signUp = () => {
          createUserWithEmailAndPassword(email,password).then(res => {
            // history.push('/main');
            //do something else with the response
            navigate("/overview");
        }).catch(err => {
            //do something with the error
            setSignupError("Sign up failed, try again");
        })
    }

    return (
        <div className ="App">
         <div className="background-image">
         <div className='signUp'>
            <h1>Sign up to create account</h1>
            <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <Link to="/overview">
            <button>Sign Up</button>
            </Link>
         </div>
         </div>
         </div>
    )
}

export default SignUp;
