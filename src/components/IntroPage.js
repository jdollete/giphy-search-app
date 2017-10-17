import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import Search from './Search';
import PreviousSearches from './PreviousSearches';
import GifTrendingView from './GifTrendingView';
import { inputFieldChanged, searchGifs, setPreviousSearch } from '../actions';


class IntroPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSearchState: []
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);

  }

  onInputChange(text) {
    // var newText;
    // if (text.nativeEvent.data === null) {
    //   newText = this.props.inputFieldText.substring(0, this.props.inputFieldText.length-1);
    // } else {
    //   newText = this.props.inputFieldText + text.nativeEvent.data;
    // }

    const currentText = document.getElementById("search-input").value;
    console.log(currentText);

    this.props.inputFieldChanged(currentText);
  }

  onSearchClick() {
    const input = this.props.inputFieldText;
    this.props.searchGifs(input);

    if (this.props.previousSearches[0] === undefined) {
      this.props.setPreviousSearch(this.props.previousSearches, input)
    } else {
      const wordsSearched = this.props.previousSearches.map(element => {return element.word})
      if (wordsSearched.includes(input)) {
        return
      } else {
        this.props.setPreviousSearch(this.props.previousSearches, input);
      }
    }

    console.log(this.props.previousSearches);
  }

  render() {
    return (
      <div>
        <SectionHeader title="GIPHY SEARCH" sectionClass="main-header" />
        <div className="outter-box">
          <div className="inner-left-box">
            <Search onClick={this.onSearchClick} onChange={this.onInputChange} value={this.props.inputFieldText} />
            <GifTrendingView />
          </div>
          <div className="inner-right-box">
            <PreviousSearches previousSearches={this.props.previousSearches} />
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  const { inputFieldText } = state.inputFieldText
  const { searchedGifs }  = state.searchedGifs
  const { previousSearches } = state.previousSearches

  return {
    inputFieldText,
    searchedGifs,
    previousSearches
  };

};

// export default IntroPage;
export default connect(mapStateToProps, { inputFieldChanged, searchGifs, setPreviousSearch })(IntroPage);
