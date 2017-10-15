import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions';

import '../CSS/App.css';

import GifListItem from './GifListItem';

class GifTrendingView extends React.Component {

  constructor(props) {
    super(props);

    this.showMe = this.showMe.bind(this);

  }

  componentWillMount() {
    this.props.fetchTrending();
    console.log(this.props.gifs);
  }

  showMe() {
    // this.props.gifs[0].images.downsized_medium.url
  }

  render() {
    return (
      <div className="border-all">
        <h1>Gif View</h1>
        <GifListItem />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { gifs } = state.trendingGif
  return {
    gifs
  };
};

export default connect(mapStateToProps, { fetchTrending })(GifTrendingView);
