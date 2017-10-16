import React, { Component } from 'react';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import Search from './Search';
import PreviousSearches from './PreviousSearches';
import GifTrendingView from './GifTrendingView';

class IntroPage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <SectionHeader title="GIHPY SEARCH" sectionClass="main-header" />
        <div className="outter-box">
          <div className="inner-left-box">
            <Search />
            <GifTrendingView />
          </div>
          <div className="inner-right-box">
            <PreviousSearches />
          </div>
        </div>
      </div>

    );
  }
}

export default IntroPage;
