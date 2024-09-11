import React, { useState } from 'react';
import './Login.css';
import image from '../assets/login/bg.png';  
import appleIcon from '../assets/login/vector.png';
import googleIcon from '../assets/login/google.png'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="form-section">
          <h2>Log In</h2>

          <button class="sign"> Sign In </button>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="login-button">Log In</button>
              {/* Botão de Login com Apple */}
              <button className="apple">
              <img src={appleIcon} alt="Apple logo" className="icon" />
              Log In with Apple
            </button>

            {/* Botão de Login com Google */}
            <button className="google">
              <img src={googleIcon} alt="Google logo" className="icon" />
              Log In with Google
            </button>
          </form>
        </div>
      </div>
      <div className="image-section">
        <img src={image} alt="Login visual" className="image" />
      </div>
    </div>
  );
}

export default LoginPage;
