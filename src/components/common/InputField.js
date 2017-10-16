import React from 'react';
import '../../CSS/App.css';

const InputField = (props) => {
  const { title, placeHolder } = props;

  return (
    <input type="text" placeholder={placeHolder} />
  );

}

export default InputField;
