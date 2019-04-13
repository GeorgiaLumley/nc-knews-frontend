import React, { Component } from "react";
import DisplayArticles from "../articles/DisplayArticles";
import {
  fetchAllArticles,
  fetchArticlesWithTopic,
  fetchFilteredArticle,
  fetchFilteredArticleWithTopic,
  fetchArticlesByAuthor
} from "../../api";
import FilterForm from "./sortingArticles/FilterForm";
import CreateArticleButton from "../CreateArticleButton";

import SearchAuthor from "./SearchAuthor";
import { navigate } from "@reach/router";
class Articles extends Component {
  state = {
    articles: [],
    filter: { order: "desc", sort_By: "created_at" },
    articleError: null,
    topicError: null
  };
  render() {
    const { articleError, articles, topicError } = this.state;
    if (articleError)
      return (
        <p className='errMsg'>Error: {articleError.msg}, Invalid Author</p>
      );
    if (topicError)
      return (
        <div>
          <p className='errMsg'>
            Error: No Topics Found. Try Different Topic Name
          </p>
          <button className='button' onClick={this.navigateTopics}>
            See Available Topics
          </button>
        </div>
      );
    return (
      <div>
        <h1>Articles</h1>
        <SearchAuthor />
        <FilterForm
          updateState={this.changeStateByFilterOptions}
          filterArticles={this.filterArticles}
        />
        <DisplayArticles articles={articles} />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.topic_id) {
      fetchArticlesWithTopic(this.props.topic_id)
        .then(res => this.setState({ articles: res }))
        .catch(err => this.setState({ topicError: true }));
    } else {
      fetchAllArticles().then(res => this.setState({ articles: res }));
    }
  }
  componentDidUpdate() {
    //use prev props

    if (this.props.author) {
      fetchArticlesByAuthor(this.props.author)
        .then(res => this.setState({ articles: res }))
        .catch(err => {
          this.setState({ articleError: err });
        });
    }
  }

  changeStateByFilterOptions = event => {
    const filterOption = event.target.value;

    if (filterOption === "asc" || filterOption === "desc") {
      this.setState(prevState => {
        return { filter: { ...prevState.filter, order: filterOption } };
      });
    }
    if (
      filterOption === "title" ||
      filterOption === "votes" ||
      filterOption === "created_at"
    ) {
      this.setState(prevState => {
        return { filter: { ...prevState.filter, sort_By: filterOption } };
      });
    }
  };
  filterArticles = event => {
    event.preventDefault();
    const topic = this.props.topic_id;
    const order = this.state.filter.order;
    const sortBy = this.state.filter.sort_By;
   
    if (this.props.topic_id) {
      fetchFilteredArticleWithTopic(order, sortBy, topic).then(data => {
     
        this.setState({ article: data.filtered });
      });
    } else {
      fetchFilteredArticle(order, sortBy).then(data => {
        this.setState({ articles: data.articles });
      });
    }
  };
  navigateTopics = () => {
    navigate("/topics");
  };
}
export default Articles;
