import React, { Component } from "react";
import { fetchArticlesByAuthor, fetchCommentsByAuthor } from "../../axios";

import DisplayArticles from "../articles/DisplayArticles";
import UserComments from "./UserComments";
class UserProfile extends Component {
  state = {
    articles: [],
    comments: []
  };
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <h2>Your Articles</h2>
        <DisplayArticles articles={this.state.articles} />
        <h2>Your Comments</h2>
        <UserComments comments={this.state.comments} user={this.props.user} />
      </div>
    );
  }
  componentDidMount() {
    fetchArticlesByAuthor(this.props.user).then(res =>
      this.setState({ articles: res })
    );
    fetchCommentsByAuthor(this.props.user).then(res => {
      this.setState({ comments: res });
    });
  }
}

export default UserProfile;
