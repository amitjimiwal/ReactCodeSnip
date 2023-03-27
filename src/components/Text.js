import React, { useState } from "react";
import { useEffect } from "react";
const Text = () => {
  const [text, settext] = useState("");
  function updateText(event) {
    settext(event.target.value);
  }
  useEffect(()=>{
      console.log("COMPONENT MOUNTED");
      return ()=>{
            console.log("COMPONENT UNMOUNTED")
      }
  },[]);
  return (
    <div>
      <input type="text" placeholder="Enter something" onChange={updateText} />
      {text.length > 0 && text}
    </div>
  );
};

export default Text;
