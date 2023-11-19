import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";

const ContextCustom = React.createContext(null);

const CustomProviderWrapper = (props) => {
  let newToDo = { id: -1, name: "", done: false };

  const [ custom, setCustom ] = useState({
    backgroundImage: "",
    fontSize: "",
    fontColor: "",
    fontFamily: ""
  });

  const { socket, updateCustom } = useContext(SocketContext); // Utilisez le hook useSocket

  socket.on("updated-todolist", (newToDoList) => {
    setToDoList(newToDoList);
  });

  socket.on("get-todolist", (socketId) => {
    socket.emit("return-todolist", toDoList, socketId);
  });

  const getCustom = () => custom;
  const addCustom = () => {
    const updatedToDoList = [...custom, newToDo];
    setToDoList(updatedToDoList);
    updateToDo(updatedToDoList);
  };

  const setNew = (content) => {
    newToDo.id = toDoList.length + 1;
    newToDo.name = content;
  };


  const setCustomization = (custom) => {
    setCustom(custom);
  };

  const exposed = {
    getToDo,
    addToDo,
    setNew,
    setDone,
    setToDoList,
  };

  return (
    <ContextCustom.Provider value={exposed}>
      {props.children}
    </ContextCustom.Provider>
  );
};

export { ContextCustom, CustomProviderWrapper };
