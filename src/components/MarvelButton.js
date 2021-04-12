import React from 'react';

function MarvelSearchButton({ searchCharacter, label }) {

  return (
    <button
      type="button"
      className="btn signin-button mb-0"
      onClick={ searchCharacter }
    >
      { label }
    </button>
  )
}

export default MarvelSearchButton;
