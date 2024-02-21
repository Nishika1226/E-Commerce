import React, { useState } from 'react';
import './CSS/Login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container mt-5" style={{ background:'linear-gradient(180deg,rgb(231, 180, 84),#fdfdfd 60%)', padding: '20px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" value={username}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} required/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FFA500' }}>
              Login
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
