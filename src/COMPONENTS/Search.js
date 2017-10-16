import React from 'react';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import InputField from './common/InputField';
import Button from './common/Button';

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="search-section">
        <InputField placeHolder="What would you like to search for?"/>
        <Button text="Search"/>
      </div>
    );
  }
}

export default Search;
