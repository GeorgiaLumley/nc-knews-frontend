import React, { Component } from "react";
import axios from "axios";
import DisplayArticles from "../articles/DisplayArticles";
import TopicList from "../topicList/TopicList";
import FilterForm from "./sortingArticles/FilterForm";

class Articles extends Component {
  state = {
    articles: [],
    filter: { order: "desc", sortBy: "created_at" }
  };
  render() {
    return (
      <div>
        <TopicList />
        <DisplayArticles articles={this.state.articles} />
        <FilterForm
          updateState={this.changeStateByFilterOptions}
          filterArticles={this.filterArticles}
        />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://nc-knews-lumley.herokuapp.com/api/articles")
      .then(res => this.setState({ articles: res.data.articles }));
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
