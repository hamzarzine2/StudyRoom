import React, { useContext, useState } from "react";
import { ContextToDO } from "../../contexts/ToDoContext";
import ToDoLine from "../toDoLine/toDoLine";
import Form from "../Forms/form";
import Button from "../Buttons/button";
import { SocketContext } from "../../contexts/SocketContext";
import './toDoList.css';

const TodoList = () => {
  const [input, setInput] = useState("");
  const { getToDo, addToDo, setNew, setToDoList } = useContext(ContextToDO);
  const { socket } = useContext(SocketContext);
  const listToDo = getToDo();

  const handleFormSubmit = () => {
    setNew(input);
    addToDo(input);
    setInput("");
  };

  const handleButtonSubmit = () => {
    setNew(input);
    addToDo(input);
    setInput("");
  };

  const handleUpdateSocket = (toDoTransfer) => {
    setToDoList(toDoTransfer);
  };
  socket.on("update-socket", handleUpdateSocket);

  return (
    <div id="todo">
      {listToDo.map((item, index) => (
        <ToDoLine key={index} props={item} id="toDoLine" />
      ))}
      <Form setMethod={setInput} input={input} onSubmit={handleFormSubmit} />
      <div className="buttonContainer">
        <Button event={handleButtonSubmit} value={"Save"} class="saveButton"/>
      </div>
    </div>
  );
};

export default TodoList;
