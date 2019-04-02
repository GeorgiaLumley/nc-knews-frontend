import FilterForm from "./sortingArticles/FilterForm";
import React, { Component } from "react";

class SortArticles extends Component {
  state = {
    filter: { order: "ascending", sortBy: "created_at" }
  };
  render() {
    return (
      <div>
        <FilterForm
          updateState={this.changeStateByFilterOptions}
          filterArticles={this.filterArticles}
        />
      </div>
    );
  }
  changeStateByFilterOptions = event => {
    const filterOption = event.target.value;

    if (filterOption === "ascending" || filterOption === "descending") {
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
  };
}

export default SortArticles;
