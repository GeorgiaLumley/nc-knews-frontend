import React from "react";
import { Link } from "@reach/router";
const Topics = ({ topics }) => {
  return (
    <ul>
      {topics.map(topic => {
        return (
          <li key={topic.slug}>
            <Link to={`/articles/topic/${topic.slug}`}>
              <p>{topic.slug}</p>
            </Link>
            <p>{topic.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Topics;
