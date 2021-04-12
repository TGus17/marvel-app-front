import React from 'react';

function MenuButton({ onClick, label }) {
  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ onClick }
    >
      { label }
    </button>
  )
}

export default MenuButton;
