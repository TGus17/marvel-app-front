import React from 'react';
import '../pages/styles/Login.css';

function MenuButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={ onClick }
    >
      { label }
    </button>
  )
}

export default MenuButton;
