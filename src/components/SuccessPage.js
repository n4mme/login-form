import React from "react";

function SuccessPage({ username, onLogout }) {
  return (
    <div className="success-page">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h1>Login Successful! 🎉</h1>
        <p className="welcome-message">
          Welcome back, <strong>{username}</strong>!
        </p>
        <p className="success-description">
          You have successfully logged in to your account.
        </p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;

