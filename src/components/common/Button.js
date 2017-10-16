import React from 'react';
import '../../CSS/App.css';

const Button = (props) => {
  const { text } = props;

  return (
    <button type="button">{text}</button>
  );

}

export default Button;
