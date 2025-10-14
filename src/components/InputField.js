import React from "react";

function InputField({ label, type, value, onChange, icon }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-wrapper">
        <span className="input-icon">{icon}</span>
        <input 
          type={type} 
          value={value} 
          onChange={onChange} 
          placeholder={`Enter your ${label.toLowerCase()}`} 
        />
      </div>
    </div>
  );
}

export default InputField;
