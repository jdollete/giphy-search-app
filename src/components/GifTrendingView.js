import React from 'react';
import axios from 'axios';

import '../CSS/App.css';

class GifTrendingView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      trendingGifs: []
    };

    this.grabTrendingGifs = this.grabTrendingGifs.bind(this);
    this.setCurrentTrendingState = this.setCurrentTrendingState.bind(this);
  }

  componentWillMount() {
    const _this = this;
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE')
      .then(response => {
        this.setState({
          trendingGifs: response.data
        });
      })
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
      <div className="border-all">
        <h1>Gif View</h1>
      </div>
    );
  }
}

export default GifTrendingView;
