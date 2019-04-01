import React from "react";

const FilterForm = ({ updateState }) => {
  return (
    <form>
      <select onChange={updateState} name='order'>
        <option value='ascending'>ascending</option>
        <option value='descending'>descending</option>
      </select>
      <select name='sortBy'>
        <option value='title'>Title</option>
        <option value='votes'>Votes</option>
        <option value='created_at'>Date</option>
      </select>
    </form>
  );
};

export default FilterForm;
