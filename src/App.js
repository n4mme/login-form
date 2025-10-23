import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SuccessPage from "./components/SuccessPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const handleLogin = (username, password) => {
    console.log("Login attempt:", username, password);

    // Hardcoded account credentials
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setLoggedInUsername(username);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername("");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <SuccessPage username={loggedInUsername} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
