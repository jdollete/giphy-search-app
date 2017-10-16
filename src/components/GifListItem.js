import React from 'react';

class GifListItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { gifUrl, gifOrigLink } = this.props

    return (
      <div className="border-all">
        <a href={gifOrigLink} target="_blank"><img src={gifUrl} /></a>
      </div>
    );
  }
}
export default GifListItem;
