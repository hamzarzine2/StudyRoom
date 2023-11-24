import { useContext, useState, useEffect } from "react";
import { ContextUser } from "../contexts/UserContext";
import Timer from "../components/Timer/Timer";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import TodoList from "../components/TodoList/TodoList";
import Customization from "../components/Customization/Customization";
import { SocketContext } from "../contexts/SocketContext";
import { ContextCustom } from "../contexts/CustomContext";
import { ContextToDO } from "../contexts/ToDoContext";

function Room() {
  const { user } = useContext(ContextUser);
  const { setCustom } = useContext(ContextCustom);
  const { initToDo } = useContext(ContextToDO);

  const roomId = useParams().id;
  const [hidden, setHidden] = useState(false);

  const toggleVisibility = () => {
    setHidden(!hidden);
  };

  return (
    <>
      {hidden && (
        <div id="divRoom1">
          <Customization />
        </div>
      )}

      <div id="divRoom2">
        <Timer />

        <p>
          <Chat welcome={`WELCOME ${user} room id == ${roomId}`} />
        </p>
        <button className="btnSave" onClick={toggleVisibility}>
          Customization
        </button>
      </div>
      <div id="divRoom3">
        <div id="divTodo">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default Room;
