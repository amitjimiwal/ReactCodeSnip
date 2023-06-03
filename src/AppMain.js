import style from "./App.module.css";
import React ,{lazy,Suspense}from "react";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const Hookuseref=lazy(()=> import("./components/Hookuseref"));
const AppMain = () => {
  return (
    <div className={style.App}>
    </div>
  );
};

export default AppMain;
