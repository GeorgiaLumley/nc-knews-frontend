import React, { Component } from "react";
import axios from "axios";
import DisplayArticles from "../articles/DisplayArticles";
import SortArticles from "./SortArticles";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <DisplayArticles articles={this.state.articles} />
        <SortArticles />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://nc-knews-lumley.herokuapp.com/api/articles")
      .then(res => this.setState({ articles: res.data.articles }));
  }
  updateState(data) {
    return <h1>update!!</h1>;
  }
}

export default Articles;
