
import React from 'react';
import './Input.css';

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>{label}</label>
      <input className="input-field" id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
