import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="firstpage">page1</Link>
      <Link to="secondpage">Page2</Link>
      <Link to="thirdpage/*">Page3</Link>
    </div>
  );
};

export default Navbar;
