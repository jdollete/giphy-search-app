import React from 'react';
import { connect } from 'react-redux';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import InputField from './common/InputField';
import Button from './common/Button';
import { inputFieldChanged } from '../actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(text) {
    var newText;
    if (text.nativeEvent.data === null) {
      newText = this.props.inputFieldText.substring(0, this.props.inputFieldText.length-1)
    } else {
      newText = this.props.inputFieldText + text.nativeEvent.data
    }

    this.props.inputFieldChanged(newText);
  }

  render() {
    return (
      <div className="search-section">
        <InputField
          onChange={this.onInputChange}
          value={this.props.inputFieldText}
          placeHolder="What would you like to search for?"/>
        <Button text="Search"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { inputFieldText } = state.inputFieldText
  return {
    inputFieldText
  };
};

export default connect(mapStateToProps, { inputFieldChanged })(Search);
