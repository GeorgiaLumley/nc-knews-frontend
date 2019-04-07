import React from "react";

const FilterForm = ({ updateState, filterArticles }) => {
  return (
    <form>
      <select className='selectBox' onChange={updateState} name='order'>
        <option value='desc'>descending</option>
        <option value='asc'>ascending</option>
      </select>
      <select onChange={updateState} name='sortBy'>
        <option value='title'>Title</option>
        <option value='votes'>Votes</option>
        <option value='created_at'>Date</option>
      </select>
      <button className='button' onClick={filterArticles} type='submit'>
        filter
      </button>
    </form>
  );
};

export default FilterForm;
