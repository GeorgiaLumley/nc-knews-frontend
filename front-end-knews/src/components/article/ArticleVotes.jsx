import * as React from "react";

export const ArticleVotes = ({ votes, updateVote }) => {
  return (
    <div>
      <p>{votes}</p>
      <span role='img'>
        <label>
          <button className='button' onClick={updateVote} value='up'>
            👍
          </button>
        </label>
        <label>
          <button className='button' onClick={updateVote} value='down'>
            👎
          </button>
        </label>
      </span>
    </div>
  );
};
