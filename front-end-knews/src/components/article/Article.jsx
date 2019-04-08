import React, { Component } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import {
  fetchArticleById,
  updateArticleVote,
  deleteArticleRequest
} from "../../api";
import ArticleComments from "./ArticleComments";
import ArticleTitleGrid from "./articleTitleGrid";

import DeleteButton from "./DeleteArticle";

class Article extends Component {
  state = {
    article: {},
    voteChange: 0
  };
  render() {
    return (
      <div>
        <div>
          <Link to={"/"}>
            <h4>All Articles</h4>
          </Link>
          {this.props.user === this.state.article.author ? (
            <DeleteButton deleteArticle={this.deleteArticle} />
          ) : (
            <> </>
          )}
        </div>
        <div className='article'>
          <ArticleTitleGrid
            title={this.state.article.title}
            author={this.state.article.author}
            created={this.state.article.created_at}
          />

          <p id='body'>{this.state.article.body}</p>
          <div id='votes'>
            <p>Votes: {this.state.article.votes + this.state.voteChange}</p>
            <span>
              <button
                className='button'
                id='voteUp'
                disabled={this.state.voteChange === 1}
                onClick={() => this.updateVote(1)}
              >
                Vote Up
              </button>

              <button
                className='button'
                id='voteDown'
                disabled={this.state.voteChange === -1}
                onClick={() => this.updateVote(-1)}
              >
                Vote Down
              </button>
            </span>
          </div>

          <ArticleComments
            article_id={this.props.article_id}
            user={this.props.user}
          />
        </div>
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
  deleteArticle = () => {
    deleteArticleRequest(this.props.article_id).then(res => {
      navigate("/");
    });
  };
}

export default Article;
