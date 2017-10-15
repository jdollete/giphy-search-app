import React from 'react';
import '../CSS/App.css';

class GifView extends React.Component {
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
    // if state is needed uncomment below------------
    // this.state = {
    //   currentState: 'LIVE'
    // }
    //
    // include event handlers------------------------
    //
    // State props outside component-----------------
    // COMPONENT.defaultProps = {
    //
    // };
  }

  render() {
    return (
      <div className="border-all">
        <h1>Gif View</h1>
      </div>
    );
  }
}

export default GifView;
