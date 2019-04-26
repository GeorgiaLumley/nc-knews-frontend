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
    voteChange: 0,
    idError: null
  };
  render() {
    const { article, voteChange, idError } = this.state;
    if (idError)
      return (
        <div>
          <p className='errMsg'>Invalid article_id</p>
          <button className='button' onClick={this.navigateArticles}>
            See available articles
          </button>
        </div>
      );
    return (
      <div>
        <div>
          <Link to={"/"}>
            <h4 id='allArticlesLink'>All Articles</h4>
          </Link>
          {this.props.user === article.author ? (
            <DeleteButton deleteArticle={this.deleteArticle} />
          ) : (
            <> </>
          )}
        </div>
        <div className='article'>
          <ArticleTitleGrid
            title={article.title}
            author={article.author}
            created={article.created_at}
          />

          <p id='body'>{article.body}</p>
          <div id='votes'>
            <p>Votes: {article.votes + voteChange}</p>
            <span>
              <button
                className='button'
                id='voteUp'
                disabled={voteChange === 1}
                onClick={() => this.updateVote(1)}
              >
                Vote Up
              </button>

              <button
                className='button'
                id='voteDown'
                disabled={voteChange === -1}
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
    fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        this.setState({ idError: true });
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
  navigateArticles = () => {
    navigate("/");
  };
}

export default Article;
