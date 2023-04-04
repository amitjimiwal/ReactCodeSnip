import React from "react";
import { useState, useRef } from "react";

const Hookuseref = () => {
  // state change cause re render 
  const [myNum, setmyNum] = useState(0);
  // change in the references doesnt cause any state render
  // ref is used for dom mainpulation from react 
  // it returns an object with only one properrty i.e,current 
  const numRef=useRef();
  const textRef=useRef();
  const handlenumber = (event) => {
    setmyNum(event.target.value);
   
  };
  const handletext = (event) => {
    setmyNum(event.target.value);
  };

  return (
    <>
      <h1>USerefhook</h1>
      <input type="number" value={myNum} onChange={handlenumber} 
        ref={numRef}
      />
      <input type="text" value={myNum} onChange={handletext} ref={textRef} />
      <h3>value is {myNum}</h3>
      <button onClick={()=>{
         console.log(numRef.current);
    // logs the input tag just like the getelementbyId in vanilla js
    const input=numRef.current;
    input.style.width="100%";
      }}>Num</button>
      <button onClick={()=>{
        console.log(textRef.current);
    // logs the input tag just like the getelementbyId in vanilla js
    const input=textRef.current;
    input.style.width="100%";
      }}>Text</button>
    </>
  );
};

export default Hookuseref;
