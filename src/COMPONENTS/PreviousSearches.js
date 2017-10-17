import React from 'react';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';

class PreviousSearches extends React.Component {

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(list) {
    const rowSearches = list.map(function(element){

      return (
        <li key={element.id}>{element.word}</li>
      )
    });
    return rowSearches;
  }

  render() {

    return (
      <div className="">
        <div className="">
          <SectionHeader sectionClass="sectioned-headers, previous-search-header" title="Previous Searches" />
        </div>
        <div>
          <ul>
            {this.renderList(this.props.previousSearches)}
          </ul>
        </div>
      </div>
    );
  }
}

export default PreviousSearches;
