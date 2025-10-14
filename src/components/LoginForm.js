import React, { useState } from "react";
import InputField from "./InputField";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome Back 👋</h2>
      <p className="subtitle">Please log in to continue</p>

      <InputField 
        label="Username" 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        icon="👤"
      />

      <InputField 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        icon="🔒"
      />

      <button type="submit">Login</button>

      <p className="footer-text">
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

export default LoginForm;
