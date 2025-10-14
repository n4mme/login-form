import React from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const handleLogin = (username, password) => {
    console.log("Login attempt:", username, password);

    if (username === "admin" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
