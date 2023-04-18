import { useDispatch, useSelector } from "react-redux";
import style from "./App.module.css";
import React from "react";

const AppMain = () => {
  const counter=useSelector((state)=> state.count);
  const dispatch=useDispatch()
  function increment(){
    dispatch({type:"Increment"});
  }
  function decrement(){
    dispatch({type:"Decrement"});
  }
  function add(){
    dispatch({type:"add",payload:10})
  }
  return (
    <div className={style.App}>
    <h1>Counter App using Redux</h1>
    <p>{counter}</p>
    <button className={style.button}  onClick={increment}>Increment</button>
    <button className={style.button} onClick={decrement}>Decrement</button>
    <button className={style.button} onClick={add}>Add 10</button>
    </div>
  );
};

export default AppMain;
