import React from 'react';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';

class PreviousSearches extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="">
          <SectionHeader sectionClass="sectioned-headers, previous-search-header" title="Previous Searches" />
        </div>
      </div>
    );
  }
}

export default PreviousSearches;
