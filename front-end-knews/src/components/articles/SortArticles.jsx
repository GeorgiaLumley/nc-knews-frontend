import FilterForm from "./sortingArticles/FilterForm";
import React, { Component } from "react";

class SortArticles extends Component {
  state = {
    filter: { order: "ascending" }
  };
  render() {
    return (
      <div>
        <FilterForm updateState={this.changeStateByFilterOptions} />
      </div>
    );
  }
  changeStateByFilterOptions(event) {
    const filterOption = event.target.value;
    if (filterOption === "ascending" || filterOption === "descending") {
      this.setState({ filter: { order: filterOption } });
    } else {
      
    }
  }
  componentDidUpdate() {

  }
}

export default SortArticles;

// const sortBy = event => {
//   const sortBy = event.target.value;

//   if (sortBy === "ascending") {
//     axios
//       .get("https://nc-knews-lumley.herokuapp.com/api/articles?order=asc")
//       .then(({ data }) => updateState(data));
//   } else if (sortBy === "descending") {
//   } else {
//   }
// };
// }

// export default SortArticles;
