import React, { Component } from "react";

import Topics from "./Topics";
import { fetchTopics } from "../../axios";

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
    fetchTopics().then(topics => this.setState({ topics }));
  }
}

export default TopicList;
