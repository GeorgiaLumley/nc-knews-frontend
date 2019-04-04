import React, { Component } from "react";
import axios from "axios";
import DisplayArticles from "../articles/DisplayArticles";
import { fetchAllArticles, fetchArticlesWithTopic } from "../../axios";
import FilterForm from "./sortingArticles/FilterForm";
import CreateArticleButton from "../CreateArticleButton";
import TopicLink from "../topicList/topicLink";
class Articles extends Component {
  state = {
    articles: [],
    filter: { order: "desc", sortBy: "created_at" }
  };
  render() {
    console.log(this.props.user);
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
    const order = this.state.filter.order;
    const sortBy = this.state.filter.sortBy;
    axios
      .get(
        `https://nc-knews-lumley.herokuapp.com/api/articles?order=${order}&&sortBy=${sortBy}`
      )
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };
}

export default Articles;
