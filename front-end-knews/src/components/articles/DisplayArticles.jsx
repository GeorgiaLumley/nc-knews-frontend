import React from "react";

const DisplayArticles = ({ articles }) => {
  return (
    <ol>
      {articles.map(article => {
        return (
          <li key={article.article_id}>
            <p>{article.title}</p>
            <p>{article.author}</p>
            <p>{article.topic}</p>
            <p>{article.votes}</p>
            <p>{article.created_at}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default DisplayArticles;
