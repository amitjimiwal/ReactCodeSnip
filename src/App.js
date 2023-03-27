import styles from "./App.module.css";
import Planets from "./components/Planets";
import { useState } from "react";
function App() {
  const age = 22; //conditional rendering
  const isGreen = false; //ternary operator
  //list rendering
  const userlist = ["Amit", "Aditya", "Ammar", "Armaan"].map((element, key) => {
    return (
      <h1>
        {key + 1}: {element}
      </h1>
    );
  });

  const userobject = [
    { name: "Amit", age: 19 },
    { name: "Aditya", age: 23 },
    { name: "Ammar", age: 22 },
  ].map((user, key) => (
    <h2>
      {key + 1} :: {user.name} {user.age}
    </h2>
  ));
  //Key is nothing but the index
  //Approach1
  const planets = [
    { name: "mars", isGasPlanet: true },
    { name: "earth", isGasPlanet: false },
    { name: "venus", isGasPlanet: true },
    { name: "jupiter", isGasPlanet: false },
    { name: "saturn", isGasPlanet: true },
    { name: "uranus", isGasPlanet: false },
  ]
    .filter((elem) => elem.isGasPlanet)
    .map((planet) => <Planets planet={planet.name} />);
  // Approach2
  const planets2 = [
    { name: "mars", isGasPlanet: true },
    { name: "earth", isGasPlanet: false },
    { name: "venus", isGasPlanet: true },
    { name: "jupiter", isGasPlanet: false },
    { name: "saturn", isGasPlanet: true },
    { name: "uranus", isGasPlanet: false },
  ].map((element) => element.isGasPlanet && <Planets planet={element.name} />);
  // states

  const [show, changeShow] = useState(true);
  const change = () => {
    changeShow(!show);
  };
  
  // count problem
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const setzero = () => setCount(0);
  return (
    <div className={styles.App}>
      <h1 style={{ color: isGreen ? "green" : "none" }}>This is the color</h1>
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <Job company="Amazon" salary={90000} position="Senior SDE" />
      <Job company="Google" salary={100000} position="Junior SDE" />
      <Job company="Flipkart" salary={70000} position="Project Manager" />

      {isGreen && <button>This is button.</button>}
      {userlist}
      {userobject}
      {planets2}
      {show && <h1>I m learning React</h1>}
      <button onClick={change}>Show/Hide</button>

      {count}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setzero}>setZero</button>
    </div>
  );
}

const Job = (props) => {
  return (
    <>
      <h1 className={styles.name}>{props.company}</h1>
      <h3>Position: {props.position} </h3>
      <h5>Salary: {props.salary}</h5>
    </>
  );
};

export default App;
