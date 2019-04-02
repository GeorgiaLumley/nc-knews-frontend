import React from "react";
import { Link } from "@reach/router";

const DisplayArticles = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => {
        return (
          <li key={article.article_id}>
            <Link to={`articles/${article.article_id}`}>
              <p>{article.title}</p>
            </Link>
            <p>{article.author}</p>
            <p>{article.topic}</p>
            <p>{article.votes}</p>
            <p>{article.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayArticles;
