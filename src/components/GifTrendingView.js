import React from 'react';
import { connect } from 'react-redux';
// import { fetchTrending } from '../actions';

import '../CSS/App.css';

import GifListItem from './GifListItem';
import SectionHeader from './common/SectionHeader';

class GifTrendingView extends React.Component {

  constructor(props) {
    super(props);

    // this.renderRow = this.renderRow.bind(this);

  }

  // componentWillMount() {
  //   this.props.fetchTrending();
  // }

  renderRow(trendingGifObjects) {
    // const elements = this.props.gifs;

    if (trendingGifObjects != null) {
      const gifRows = trendingGifObjects.map(function(element){

        return (
          <GifListItem key={element.id} gifUrl={element.images.fixed_height.url} gifOrigLink={element.url} />
        )
      });
      return gifRows;
    }
  }

  render() {
    const { trendingGifObjects } = this.props;

    return (
      <div className="gif-image-section">
        <SectionHeader sectionClass="sectioned-headers" title="Trending GIFs" />
        <div className="gif-image-display">
          {this.renderRow(trendingGifObjects)}
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   const { gifs } = state.trendingGif
//
//   return { gifs };
//
// };

// export default connect(mapStateToProps, { fetchTrending })(GifTrendingView);
export default GifTrendingView;
