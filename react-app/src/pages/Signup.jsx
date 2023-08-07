import React, { useState } from 'react';
import { auth } from './FirebaseConfig'; // Import the 'auth' object from the FirebaseConfig file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const db = getFirestore();

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate= useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data to Firebase Firestore if needed
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
      });

      // Redirect to signin page after successful signup
    //  window.location.href = '/login';
    //  navigate("/login"); 
    setMsg("Sign-up Successful, please return to the log-in page");

      // Clear form inputs after successful signup
      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const redirectToSignIn = () => {
    // Replace '/target-page' with the URL of the page you want to redirect to
    navigate("/login"); 
  };

  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const handleSignUpClick = () => {
    // Perform your sign-up logic here (e.g., sending data to a server)
    // For this example, we'll just set the state to true after a brief delay
    setTimeout(() => {
      setIsSignUpSuccessful(true);
    }, 1000); // Simulating a sign-up process delay of 1 second
  };


  return (
    <div className = "App">
        <div className="body">
         <div className='signIn'>
             <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>

                <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>

                <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>

                <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>

                <div>
                    {/* <button type="submit">Sign Up</button> */}
                    {isSignUpSuccessful ? (<p>Successful sign-up. Please return to the log-in page.</p>) : (
                    <button type="submit" onClick={handleSignUpClick}>Sign Up</button>
                    )}
                </div>

                <div>
                    <button onClick={redirectToSignIn}>Login </button>
                </div>
                
            </form>
                    {msg && <p>{msg}</p>}
                </div>
                </div>

                </div>
  );
};

export default SignUp;