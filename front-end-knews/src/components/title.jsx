import React from "react";

import { navigate } from "@reach/router";

const Title = () => {
  return (
    <button onClick={homeLink}>
      <h1 id='mainTitle'> NorthCoders News</h1>
    </button>
  );
};

export default Title;

const homeLink = () => {
  navigate("/");
};
