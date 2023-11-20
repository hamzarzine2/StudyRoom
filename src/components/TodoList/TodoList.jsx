import { useContext, useState } from "react";
import { ContextToDO } from "../../contexts/ToDoContext";
import ToDoLine from "../toDoLine/toDoLine";
import Form from "../Forms/form";
import Button from "../Buttons/button";
import "./toDoList.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const { getToDo, addToDo } = useContext(ContextToDO);
  const listToDo = getToDo();

  const handleSubmit = () => {
    addToDo({
      id: listToDo.length + 1, 
      name: input, 
      done: false
    });
    setInput("");
  };

  return (
    <div id="todo">
      {listToDo.map((item, index) => (
        <ToDoLine key={index} props={item} id="toDoLine" />
      ))}
      <Form setMethod={setInput} input={input} onSubmit={handleSubmit} />
      <div className="buttonContainer">
        <Button event={handleSubmit} value={"Save"} class="saveButton" />
      </div>
    </div>
  );
};

export default TodoList;
