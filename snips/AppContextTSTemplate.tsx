import React, { createContext, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
// schema 
export interface Props {
         children: React.ReactNode;
         toggle?:()=> void;
}
export interface todoSchema{
         id:string,
         title:string,
         time:string,
         date:string,
         completed:boolean,
         status?:string ,
         key?:number
}
export interface GlobalStateSchema{
         todos:todoSchema[],
         fetchtodo:(type: string) => void | todoSchema[],
         addTodo:(todo: todoSchema) => void,
         deletetodo:(id: string) => void,
         settype:Dispatch<SetStateAction<string>>   ,
         updatetodo: (id:string,data?:string)    => void
}
const initialTodos: todoSchema[] = [];
export const ConText = createContext<GlobalStateSchema>({
  todos: initialTodos,
  fetchtodo: () => {},
  addTodo: () => {},
  deletetodo: () => {},
  settype: () => {},
  updatetodo: () => {},
});





const AppContext: React.FC<Props> = ({ children }) => {
  const [todos, settodos] = useState<todoSchema[]>([]);
  const [type, settype] = useState("all");

  function fetchtodo(type: string) {
    const storedTodos = localStorage.getItem("todos");
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    if (type === "all") {
      settodos(items);
      return items;
    }
    const filteredtodo = items.filter(
      (item: todoSchema) => item.status === type
    );
    settodos(filteredtodo);
  }

  function addTodo(todo: todoSchema) {
    const storedTodos = localStorage.getItem("todos");
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    items.push(todo);
    localStorage.setItem("todos", JSON.stringify(items));
    settodos(items);
  }

  function deletetodo(id: string) {
    const storedTodos = localStorage.getItem("todos");
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    const filteredtodo = items.filter((item: todoSchema) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredtodo));
    settodos(filteredtodo);
  }

  function updatetodo(id: string, data?: string) {
    const storedTodos = localStorage.getItem("todos");
    const items = storedTodos ? JSON.parse(storedTodos) : [];
    const filteredtodo = items.reduce((acc: todoSchema[], curr: todoSchema) => {
      if (curr.id === id && !data) {
        curr.completed
          ? acc.push({ ...curr, completed: false, status: "incompleted" })
          : acc.push({ ...curr, completed: true, status: "completed" });
        return acc;
      } else if (curr.id === id && data) {
        acc.push({
          ...curr,
          title: data,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        });
        return acc;
      } else {
        acc.push(curr);
        return acc;
      }
    }, []);
    localStorage.setItem("todos", JSON.stringify(filteredtodo));
    settodos(filteredtodo);
  }
  useEffect(() => {
    fetchtodo(type);
  }, [type]);
  return (
    <ConText.Provider
      value={{ todos, fetchtodo, addTodo, deletetodo, settype, updatetodo }}
    >
      {children}
    </ConText.Provider>
  );
};

export default AppContext;
