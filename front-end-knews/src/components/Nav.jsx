import React from "react";

import { Link } from "@reach/router";

const Nav = props => {
  return (
    <nav>
      <Link to='topics'>Topics</Link>
      <Link to='blocks'>blocks</Link>
    </nav>
  );
};

export default Nav;
