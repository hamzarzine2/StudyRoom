import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";

const ContextToDO = React.createContext(null);

const ToDoProviderWrapper = (props) => {
  let newToDo = { id: -1, name: "", done: false };
  const [toDoList, setToDo] = useState([
    { id: 1, name: "test 1", done: false },
    { id: 2, name: "test 2", done: true },
  ]);
  const { socket, updateToDo } = useContext(SocketContext); // Utilisez le hook useSocket

  const getToDo = () => toDoList;
  const addToDo = () => {
    const updatedToDoList = [...toDoList, newToDo];
    setToDo(updatedToDoList);
    updateToDo(updatedToDoList);
  };

  const setNew = (content) => {
    newToDo.id = toDoList.length + 1;
    newToDo.name = content;
  };

  const setDone = (toDoNote) => {
    const index = toDoList.indexOf(toDoNote);
    if (index !== -1) {
      const changedToDo = { ...toDoList[index] };
      changedToDo.done = true;
      const updatedToDoList = [...toDoList];
      updatedToDoList[index] = changedToDo;
      setToDo(updatedToDoList);
      updateToDo(updatedToDoList);
    }
  };

  const setToDoList = (toDoList) => {
    setToDo(toDoList);
  };

  const exposed = {
    getToDo,
    addToDo,
    setNew,
    setDone,
    setToDoList,
  };

  return (
    <ContextToDO.Provider value={exposed}>
      {props.children}
    </ContextToDO.Provider>
  );
};

export { ContextToDO, ToDoProviderWrapper };
