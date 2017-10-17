import React from 'react';
// import { connect } from 'react-redux';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import InputField from './common/InputField';
import Button from './common/Button';
import { inputFieldChanged, searchGifs } from '../actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onSearchClick = this.onSearchClick.bind(this);

  }

  componentWillMount() {

  }

  // onInputChange(text) {
  //   var newText;
  //   if (text.nativeEvent.data === null) {
  //     newText = this.props.inputFieldText.substring(0, this.props.inputFieldText.length-1);
  //   } else {
  //     newText = this.props.inputFieldText + text.nativeEvent.data;
  //   }
  //
  //   this.props.inputFieldChanged(newText);
  // }
  //
  // onSearchClick() {
  //   const input = this.props.inputFieldText;
  //   this.props.searchGifs(input);
  // }

  render() {
    const { onClick, onChange, onKeyDownCheck, value } = this.props
    return (
      <div className="search-section">
        <InputField
          onChange={onChange}
          onKeyDownCheck={onKeyDownCheck}
          value={value}
          placeHolder="What would you like to search for?"/>
        <Button onClick={onClick} text="Search"/>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const { inputFieldText } = state.inputFieldText
//   const { searchedGifs}  = state.searchedGifs
//
//   return {
//     inputFieldText,
//     searchedGifs
//   };
//
// };

export default Search;


// export default connect(mapStateToProps, { inputFieldChanged, searchGifs })(Search);
