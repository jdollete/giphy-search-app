import React, { Component } from 'react';
import './CSS/App.css';
import Header from './COMPONENTS/Header';
import Search from './COMPONENTS/Search';
import PreviousSearches from './COMPONENTS/PreviousSearches';
import GifView from './COMPONENTS/GifView';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <GifView />
        <PreviousSearches />
      </div>
    );
  }
}

export default App;
