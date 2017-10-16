import React from 'react';

class GifListItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    console.log("-------------HIT------------");
    const { gifUrl } = this.props
    debugger;
    return (
      <div className="border-all">
        <img src={gifUrl} />
      </div>
    );
  }
}
export default GifListItem;
