import React from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App2 from "./App2";
import App from "./App";
import Navbar from "./components/Navbar";
import App3 from "./App3";

const AppMain = () => {
  return (
    <div className={style.App}>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" />
          <Route path="firstpage" element={<App2 />} />
          <Route path="secondpage" element={<App />} />
          <Route path="thirdpage/*" element={<App3 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppMain;
