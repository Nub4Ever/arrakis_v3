import React, { useState } from 'react';
import { auth } from "./FirebaseConfig";
import "../App.css";

// import '../styles/Signin.css';
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";


function SignIn() {
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState("");
    const navigate= useNavigate();

    const signIn = () => {
          signInWithEmailAndPassword(auth,email, password).then(res => {
            // history.push('/main');
            //do something else with the response
            navigate("/overview"); 
        }).catch(err => {
            //do something with the error
            setLoginError("Ops, Wrong Password/Email, Try again");
        })
    }

    return (
        <div className="background-image"> 
         <div className='signIn'>
            <h1>Sign in to your account</h1>
            <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button onClick={signIn}>Sign In</button>   
            {loginError && <p className="error-message">{loginError}</p>}
         </div>
         </div>
      
                
    )
}

export default SignIn