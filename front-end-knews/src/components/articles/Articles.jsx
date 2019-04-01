import React, { Component } from "react";
import axios from "axios";
import DisplayArticles from "../articles/DisplayArticles";
class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <DisplayArticles articles={this.state.articles} />
        
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://nc-knews-lumley.herokuapp.com/api/articles")
      .then(res => this.setState({ articles: res.data.articles }));
  }
}

export default Articles;
