import React from 'react';

import '../CSS/App.css';

class GifListItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { gifUrl, gifOrigLink } = this.props

    return (
      <div className="gif-image">
        <a href={gifOrigLink} target="_blank"><img src={gifUrl} /></a>
      </div>
    );
  }
}
export default GifListItem;
