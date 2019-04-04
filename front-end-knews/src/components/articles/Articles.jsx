import React, { Component } from "react";
import DisplayArticles from "../articles/DisplayArticles";
import {
  fetchAllArticles,
  fetchArticlesWithTopic,
  fetchFilteredArticle,
  fetchFilteredArticleWithTopic
} from "../../axios";
import FilterForm from "./sortingArticles/FilterForm";
import CreateArticleButton from "../CreateArticleButton";
import TopicLink from "../topicList/topicLink";
class Articles extends Component {
  state = {
    articles: [],
    filter: { order: "desc", sortBy: "created_at" }
  };
  render() {
    return (
      <div>
        <CreateArticleButton />
        <TopicLink />
        <DisplayArticles articles={this.state.articles} />
        <FilterForm
          updateState={this.changeStateByFilterOptions}
          filterArticles={this.filterArticles}
        />
      </div>
    );
  }
  componentDidMount() {
    if (!this.props.topic_id) {
      fetchAllArticles().then(res => this.setState({ articles: res }));
    } else {
      fetchArticlesWithTopic(this.props.topic_id).then(res => {
        console.log(res);
        this.setState({ articles: res });
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
        return { filter: { ...prevState.filter, sortBy: filterOption } };
      });
    }
  };
  filterArticles = event => {
    event.preventDefault();
    const topic = this.props.topic_id;
    console.log(topic);
    const order = this.state.filter.order;
    const sortBy = this.state.filter.sortBy;
    this.props.topic_id
      ? fetchFilteredArticleWithTopic(order, sortBy, topic).then(data => {
          console.log("topic");
          this.setState({ article: data.articles });
        })
      : fetchFilteredArticle(order, sortBy).then(data => {
          console.log("normal");
          this.setState({ articles: data.articles });
        });
  };
}
export default Articles;
