import React, { Component } from "react";
import { fetchArticleById, fetchCommentsByArticleId } from "../../axios";
import { ArticleComments } from "./ArticleComments";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    return (
      <div className='article'>
        <h2 id='title'>{this.state.article.title}</h2>
        <p id='body'>{this.state.article.body}</p>
        <p id='votes'>{this.state.article.votes}</p>
        <ArticleComments comments={this.state.comments} />
      </div>
    );
  }
  componentDidMount() {
    fetchArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
    fetchCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
}

export default Article;
