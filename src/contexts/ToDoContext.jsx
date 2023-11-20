import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";

const ContextToDO = React.createContext(null);

const ToDoProviderWrapper = (props) => {
  const [toDoList, setToDo] = useState([
    { id: 1, name: "test 1", done: false },
    { id: 2, name: "test 2", done: true },
  ]);
  const { socket, updateToDoList } = useContext(SocketContext); // Utilisez le hook useSocket

  socket.on("updated-todolist", (newToDoList) => {
    setToDoList(newToDoList);
  });

  socket.on("get-todolist", (socketId) => {
    socket.emit("return-todolist", toDoList, socketId);
  });

  const getToDo = () => toDoList;
  
  const addToDo = (newToDo) => {
    const updatedToDoList = [...toDoList, newToDo];
    setToDoList(updatedToDoList);
    updateToDoList(updatedToDoList);
  };

  const setDone = (toDoNote) => {
    const index = toDoList.indexOf(toDoNote);
    if (index !== -1) {
      const changedToDo = { ...toDoList[index] };
      changedToDo.done = true;
      const updatedToDoList = [...toDoList];
      updatedToDoList[index] = changedToDo;
      setToDo(updatedToDoList);
      updateToDoList(updatedToDoList);
    }
  };

  const setToDoList = (toDoList) => {
    setToDo(toDoList);
  };

  const exposed = {
    getToDo,
    addToDo,
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
