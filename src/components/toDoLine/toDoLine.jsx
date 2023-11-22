import { useContext } from "react";
import "./toDoLine.css";
import Button from "../Buttons/button";
import { ContextToDO } from "../../contexts/ToDoContext";

const ToDoLine = ({ props }) => {
  const { setDone } = useContext(ContextToDO);
  const fini = () => {
    setDone(props);
  };

  return (
    <div id="toDoLine" className={props.done ? "done" : ""}>
      <p>{props.name}</p>
      {props.done ? <span>✓</span> : <Button event={fini} value="FINI" class="buttonFinish" />}
    </div>
  );
};

export default ToDoLine;
