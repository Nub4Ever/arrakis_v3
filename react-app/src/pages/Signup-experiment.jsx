import React, { useState } from 'react';
import { auth } from "./FirebaseConfig";
import '../App.css'; // Import the CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        const { email, password } = formData;
        await auth.createUserWithEmailAndPassword(email, password);
        console.log('User registered successfully!');
      } catch (error) {
        console.error('Error signing up:', error.message);
      }
    } else {
      console.error('Passwords do not match.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sign-label">Email:</label>
          <input className="sign-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="sign-label">Password:</label>
          <input className="sign-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="sign-label">Confirm Password:</label>
          <input className="sign-input"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className="sign-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
