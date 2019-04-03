import React, { Component } from "react";
import axios from "axios";
import Topics from "./Topics";

class TopicList extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <Topics topics={this.state.topics} />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://nc-knews-lumley.herokuapp.com/api/topics")
      .then(res => this.setState({ topics: res.data.topics }));
  }
}

export default TopicList;
