import React from "react";

const Topics = ({ topics }) => {
  return (
    <ul>
      {topics.map(topic => {
        return (
          <li key={topic.slug}>
            <h3>{topic.slug}</h3>
            <h4>{topic.description}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Topics;
