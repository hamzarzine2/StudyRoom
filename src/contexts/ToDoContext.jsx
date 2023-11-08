import React, { useState } from "react";

const ContextToDO = React.createContext(null);

const ToDoProviderWrapper = (props) => {
  let newToDo = { id: -1, name: "", done: false };

  const [toDoList, setToDo] = useState([
    { id: 1, name: "test 1", done: false },
    { id: 2, name: "test 2", done: true },
  ]);

  const getToDo = () => toDoList;
  const addToDo = () => {
    console.log(newToDo);
    setToDo([...toDoList, newToDo]);
    console.log(toDoList);
  };

  const setNew = (content) => {
    newToDo.id = toDoList.length + 1;
    newToDo.name = content;
  };

  const setDone = (toDoNote) => {
    // Recherche de l'index de l'élément à marquer comme terminé
    const index = toDoList.indexOf(toDoNote);
    if (index !== -1) {
      const changedToDo = { ...toDoList[index] };
      changedToDo.done = true;
      const updatedToDoList = [...toDoList];
      updatedToDoList[index] = changedToDo;
      setToDo(updatedToDoList);
    }
  };

  const exposed = {
    getToDo,
    addToDo,
    setNew,
    setDone,
  };

  return (
    <ContextToDO.Provider value={exposed}>
      {props.children}
    </ContextToDO.Provider>
  );
};

export { ContextToDO, ToDoProviderWrapper };
