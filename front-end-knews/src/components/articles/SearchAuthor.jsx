import React, { Component } from "react";

import { navigate } from "@reach/router";

class SearchAuthor extends Component {
  state = {
    author: null
  };
  render() {
    return (
      <div id='searchAuthorContainer'>
        <label>
          Search Author
          <input  type='text'  className='inputBox' onChange={this.setAuthor} />
        </label>
        <button className='button' type='submit' onClick={this.searchAuthor}>
          Search
        </button>
      </div>
    );
  }
  setAuthor = e => {
    const author = e.target.value;

    this.setState({ author });
  };
  searchAuthor = () => {
    navigate(`/articles/user/${this.state.author}`);
  };
}

export default SearchAuthor;
