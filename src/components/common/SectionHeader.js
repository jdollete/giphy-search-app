import React from 'react';
import '../../CSS/App.css';

const SectionHeader = (props) => {
  const { title } = props;

  return (
    <div className="border-all">
      <h1>{title}</h1>
    </div>
  );

}

export default SectionHeader;
