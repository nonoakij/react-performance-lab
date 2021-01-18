import React from 'react';

interface props {
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC <props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    ボタン
  </button>
);

export default Button;
