
import React from 'react';

function Button({ isActive, onClick, children }) {
  return (
    <button className={`secondaryBtn ${isActive && 'active'}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
