import { useContext, useState, useEffect } from "react";
import { ContextToDO } from "../../contexts/ToDoContext";
import ToDoLine from "../toDoLine/toDoLine";
import Form from "../Forms/form";
import Button from "../Buttons/button";

const TodoList = () => {
  const { getToDo, addToDo, setNew } = useContext(ContextToDO);
  const listToDo = getToDo();

  return (
    <div id="todo">
      {listToDo.map((item, index) => (
        <ToDoLine key={index} props={item} />
      ))}
      <Form setMethod={setNew} />
      <Button event={addToDo} value={"Save"} />
    </div>
  );
};

export default TodoList;
