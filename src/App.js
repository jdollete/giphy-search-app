import React, { Component } from 'react';
import axios from 'axios';
import './CSS/App.css';
import Header from './COMPONENTS/Header';
import Search from './COMPONENTS/Search';
import PreviousSearches from './COMPONENTS/PreviousSearches';
import GifView from './COMPONENTS/GifView';

class App extends Component {
  // React Lifecycle:
  // getDefaultProps
  // getInitialState
  // componentWillReceiveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // render
  // componentDidUpdate

  constructor(props) {
    super(props);

    this.state = {
      trendingGifs: ""
    }

    this.grabTrendingGifs = this.grabTrendingGifs.bind(this);
    this.setCurrentTrendingState = this.setCurrentTrendingState.bind(this);

  }

  componentWillMount() {
    const data = this.grabTrendingGifs();
  }

  componentDidMount() {
    debugger;
  }

  grabTrendingGifs() {
    const _this = this;

    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE')
      .then(response => {
        console.log("-------------AXIOS---------");
        _this.setCurrentTrendingState(response.data.data);
      })
      .catch(error => {
        console.log("-------------Error---------");
        console.log(error);
      });

  }

  setCurrentTrendingState(data) {
    this.setState(
      {trendingGifs: data}
    );
  }

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
