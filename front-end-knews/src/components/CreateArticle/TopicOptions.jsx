import React from "react";

const TopicOptions = ({ topics }) => {
  return (
    <select name='topics' id='topics'>
      <option id='defaultTopic' value='' disabled selected>
        Select a Topic
      </option>
      {topics.map(topic => {
        return (
          <option id={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        );
      })}
    </select>
  );
};

export default TopicOptions;
