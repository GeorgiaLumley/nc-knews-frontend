import React, { Component } from "react";
import {
  fetchArticleById,
  fetchCommentsByArticleId,
  updateArticleVote
} from "../../axios";
import { ArticleComments } from "./ArticleComments";
import { ArticleVotes } from "./ArticleVotes";
import ArticleTitleGrid from "./articleTitleGrid";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    return (
      <div className='article'>
        <ArticleTitleGrid
          title={this.state.article.title}
          author={this.state.article.author}
          created={this.state.article.created_at}
        />
        <p id='body'>{this.state.article.body}</p>
        <ArticleVotes
          votes={this.state.article.votes}
          updateVote={this.updateVote}
        />

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

  updatedVotes = ({ data }) => {
    this.setState({ article: data });
  };

  updateVote = event => {
    event.preventDefault();
    const value = event.target.value;
    let vote = null;
    if (value === "up") {
      vote = { incVotes: 1 };
    } else {
      vote = { incVotes: -1 };
    }
    updateArticleVote(vote, this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default Article;
