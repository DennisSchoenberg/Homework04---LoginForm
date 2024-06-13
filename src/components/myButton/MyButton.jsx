
import React from 'react';
import './MyButton.css';

function MyButton({ name, type }) {
  return (
    <button type={type} className="my-button">
      {name}
    </button>
  );
}

export default MyButton;
