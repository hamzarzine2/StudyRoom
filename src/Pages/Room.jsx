import { useContext, useState, useEffect } from "react";
import { ContextUser } from "../contexts/UserContext";
import Timer from "../components/Timer/Timer";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import TodoList from "../components/TodoList/TodoList";
import Customization from "../components/Customization/Customization";
import { SocketContext } from "../contexts/SocketContext";
import { ContextCustom } from "../contexts/CustomContext";

const STORAGE_CUSTOM_KEY = "custom";import { io } from "socket.io-client";
const divRoot = document.getElementById("root");
const defaultBackground = window.getComputedStyle(divRoot).backgroundImage;

function Room() {
  const { user } = useContext(ContextUser);
  const { joinRoom } = useContext(SocketContext);
  const { setCustom } = useContext(ContextCustom);
  const roomId = useParams().id;
  const [hidden, setHidden] = useState(false);

  joinRoom(roomId, user);
  const arrayValue = fetchValue(STORAGE_CUSTOM_KEY, null);
  if(arrayValue!==null){
    divRoot.style.backgroundImage = `url(${arrayValue.backgroundImage})`;
    divRoot.style.fontSize = `${arrayValue.fontFamily}px`;
    divRoot.style.fontSize = `${arrayValue.fontSize}px`;
    divRoot.style.color = `${arrayValue.fontColor}`;
  }

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
