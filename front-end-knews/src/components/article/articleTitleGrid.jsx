import React from "react";

const ArticleTitleGrid = ({ title, author, created }) => {
  return (
    <div id='title'>
      <h2 id='articleTitle'>{title}</h2>
      <h4 id='articleAuthor'>{author}</h4>
      <h5 id='articleCreated'>{created}</h5>
    </div>
  );
};

export default ArticleTitleGrid;
