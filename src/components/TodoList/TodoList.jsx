import { useContext, useState , useEffect} from "react";
import { ContextToDO } from "../../contexts/ToDoContext";
import ToDoLine from "../toDoLine/toDoLine";
import Form from "../Forms/form";
import Button from "../Buttons/button";
import { SocketContext } from "../../contexts/SocketContext";

const TodoList = () => {
  const { getToDo, addToDo, setNew,setToDoList } = useContext(ContextToDO);
  const { socket } = useContext(SocketContext);
  const listToDo = getToDo();

 
    const handleUpdateSocket = (toDoTransfer) => {
      console.log("ca y est nous y est  ", toDoTransfer);
      setToDoList(toDoTransfer)
    };
    socket.on("update-socket", handleUpdateSocket);

  

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
