import React from "react";

const Topics = ({ topics }) => {
  return (
    <ul>
      {topics.map(topic => {
        return (
          <li key={topic.slug}>
            <p>{topic.slug}</p>
            <p>{topic.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Topics;
