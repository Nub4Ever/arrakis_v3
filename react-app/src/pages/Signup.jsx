import React, { useState } from 'react';
import { auth } from "./FirebaseConfig";
import "../App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        //do something else with the response
        navigate("/login");
      })
      .catch(err => {
        //do something with the error
        setSignupError("Sign up failed, try again");
      });
  };

  return (
    <div className="App">
      <div className="background-image">
        <div className='signUp'>
          <h1>Sign up to create an account</h1>
          <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
          <button onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </div>
  );
}

export default SignUp;