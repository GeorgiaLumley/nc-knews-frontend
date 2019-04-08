import React, { Component } from "react";
import DisplayArticles from "../articles/DisplayArticles";
import {
  fetchAllArticles,
  fetchArticlesWithTopic,
  fetchFilteredArticle,
  fetchFilteredArticleWithTopic,
  fetchArticlesByAuthor
} from "../../axios";
import FilterForm from "./sortingArticles/FilterForm";
import CreateArticleButton from "../CreateArticleButton";
import TopicLink from "../topicList/topicLink";
import SearchAuthor from "./SearchAuthor";
class Articles extends Component {
  state = {
    articles: [],
    filter: { order: "desc", sortBy: "created_at" },
    articleError: null
  };
  render() {
    if (this.state.articleError)
      return (
        <p id='errMsg'>Error: {this.state.articleError.msg}, Invalid Author</p>
      );
    return (
      <div>
        {this.props.user ? <CreateArticleButton /> : <> </>}
        <TopicLink />
        <h2>Articles</h2>
        <SearchAuthor />
        <FilterForm
          updateState={this.changeStateByFilterOptions}
          filterArticles={this.filterArticles}
        />
        <DisplayArticles articles={this.state.articles} />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.topic_id) {
      fetchArticlesWithTopic(this.props.topic_id).then(res =>
        this.setState({ articles: res })
      );
    } else if (this.props.author) {
      fetchArticlesByAuthor(this.props.author)
        .then(res => this.setState({ articles: res }))
        .catch(err => {
          this.setState({ articleError: err });
        });
    } else {
      fetchAllArticles().then(res => this.setState({ articles: res }));
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
        return { filter: { ...prevState.filter, sortBy: filterOption } };
      });
    }
  };
  filterArticles = event => {
    event.preventDefault();
    const topic = this.props.topic_id;

    const order = this.state.filter.order;
    const sortBy = this.state.filter.sortBy;
    this.props.topic_id
      ? fetchFilteredArticleWithTopic(order, sortBy, topic).then(data => {
          this.setState({ article: data.articles });
        })
      : fetchFilteredArticle(order, sortBy).then(data => {
          this.setState({ articles: data.articles });
        });
  };
}
export default Articles;
