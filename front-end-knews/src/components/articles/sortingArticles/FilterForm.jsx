import React from "react";

const FilterForm = ({ updateState, filterArticles }) => {
  return (
    <form id='filterForm'>
      <select
        className='selectBox'
        id='order'
        onChange={updateState}
        name='order'
      >
        <option value='desc'>descending</option>
        <option value='asc'>ascending</option>
      </select>
      <select
        className='selectBox'
        id='filterBy'
        onChange={updateState}
        name='sortBy'
      >
        <option value='title'>Title</option>
        <option value='votes'>Votes</option>
        <option value='created_at'>Date</option>
      </select>
      <button className='button' id="filterButton"onClick={filterArticles} type='submit'>
        filter
      </button>
    </form>
  );
};

export default FilterForm;
