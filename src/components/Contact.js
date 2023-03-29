import React, { useContext } from "react";
import { App3Context } from "../App3";
const Contact = () => {
  const {username}=useContext(App3Context)
  return <div>Contact of {username} : 996784035</div>;
};

export default Contact;
