import React from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions';

import '../CSS/App.css';

import GifListItem from './GifListItem';
import SectionHeader from './common/SectionHeader';

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
          <GifListItem key={element.id} gifUrl={element.images.fixed_height.url} gifOrigLink={element.url} />
        )
      });
      return gifRows;
    }
  }

  render() {
    return (
      <div className="gif-image-section">
        <SectionHeader sectionClass="sectioned-headers" title="Trending GIFs" />
        <div className="gif-image-display">
          {this.renderRow()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { gifs } = state.trendingGif

  return { gifs };

};

export default connect(mapStateToProps, { fetchTrending })(GifTrendingView);
