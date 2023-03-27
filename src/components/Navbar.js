import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/firstpage">page1</Link>
      <Link to="/secondpage">Page2</Link>
    </div>
  );
};

export default Navbar;
