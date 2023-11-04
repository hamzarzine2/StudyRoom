import { useContext } from "react";
import "./toDoLine.css";
import Button from "../Buttons/button";
import { ContextToDO } from "../../contexts/ToDoContext";

const ToDoLine = ({ props }) => {
  const { setDone } = useContext(ContextToDO);
  console.log(props);
  const fini = () => {
    console.log("boby  ", props.id);
    setDone(props);
  };

  return (
    <div id="toDoLine" className={props.done ? "done" : ""}>
      <p>{props.name}</p>
      {props.done ? <span>✓</span> : null}
      <Button event={fini} value="FINI" />
    </div>
  );
};

export default ToDoLine;
