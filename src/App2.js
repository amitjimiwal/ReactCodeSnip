import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Text from "./components/Text";
import Axios from "axios";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App2 = () => {
  const [showText, setshowText] = useState(false);
  const [catFact, setcatFact] = useState("");
  function triggercomponent() {
    setshowText(!showText);
  }
  const getCatData = () => {
    //     fetch("https://catfact.ninja/fact").then(response=> response.json()).then(data=>{
    //       setcatFact(data.fact)
    //     })
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcatFact(res.data.fact);
    });
  };

  useEffect(()=>{
      getCatData();
  },[])
  return (
    <div className={style.App}>
      <button onClick={triggercomponent}>Show Text</button>
      {showText && <Text />}

      <button onClick={getCatData}>GenerateCatFact</button>
      <br></br>
      {catFact.length > 0 && catFact}
    </div>
  );
};

export default App2;
