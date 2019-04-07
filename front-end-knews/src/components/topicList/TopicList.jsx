import React, { Component } from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";
import { fetchTopics } from "../../axios";

class TopicList extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <Link to={"/"}>
          <h4>All Articles</h4>
        </Link>
        <Topics topics={this.state.topics} />
      </div>
    );
  }
  componentDidMount() {
    fetchTopics().then(topics => this.setState({ topics }));
  }
}

export default TopicList;
