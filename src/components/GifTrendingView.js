import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions';

import '../CSS/App.css';

import GifListItem from './GifListItem';

class GifTrendingView extends React.Component {

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);

  }

  componentWillMount() {
    this.props.fetchTrending();
  }

  renderRow() {
    const elements = this.props.gifs;

    if (elements != null) {
      const gifRows = elements.map(function(element){

        return (
          <GifListItem key={element.id} gifUrl={element.images.downsized_medium.url} gifOrigLink={element.url} />
        )
      });
      return gifRows;
    }
  }

  render() {
    return (
      <div className="border-all">
        <h1>Gif View</h1>
        {this.renderRow()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { gifs } = state.trendingGif

  return { gifs };

};

export default connect(mapStateToProps, { fetchTrending })(GifTrendingView);
