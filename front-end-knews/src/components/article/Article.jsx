import React, { Component } from "react";
import { fetchArticleById, updateArticleVote } from "../../axios";
import ArticleComments from "./ArticleComments";
import ArticleTitleGrid from "./articleTitleGrid";

class Article extends Component {
  state = {
    article: {},
    voteChange: 0
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
        <div id='votes'>
          <p>{this.state.article.votes + this.state.voteChange}</p>
          <span role='img'>
            <button
              disabled={this.state.voteChange === 1}
              onClick={() => this.updateVote(1)}
            >
              Up
            </button>

            <button
              disabled={this.state.voteChange === -1}
              onClick={() => this.updateVote(-1)}
            >
              Down
            </button>
          </span>
        </div>
        <ArticleComments
          article_id={this.props.article_id}
          user={this.props.user}
        />
      </div>
    );
  }
  componentDidMount() {
    fetchArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  updateVote = value => {
    updateArticleVote(value, this.props.article_id);
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + value };
    });
  };
}

export default Article;
