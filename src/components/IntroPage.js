import React, { Component } from 'react';

import '../CSS/App.css';
import Header from './Header';
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
        <Header />
        <Search />
        <GifTrendingView />
        <PreviousSearches />
      </div>

    );
  }
}

export default IntroPage;
