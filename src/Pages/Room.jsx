import { useContext, useState } from "react";
import { ContextUser } from "../contexts/UserContext";
import Timer from "../components/Timer/Timer";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import TodoList from "../components/TodoList/TodoList";
import Customization from "../components/Customization/Customization";
import { SocketContext } from "../contexts/SocketContext";

function Room() {
  const { user } = useContext(ContextUser);
  const { joinRoom } = useContext(SocketContext);
  const roomId = useParams().id;
  const [hidden, setHidden] = useState(false);
  joinRoom(roomId);

  const toggleVisibility = () => {
    setHidden(!hidden);
  };

  return (
    <>
        {hidden &&
          <div id="divRoom1">
            <Customization />
          </div>
        }
      


      <div id="divRoom2">
      <Timer />
      <button onClick={toggleVisibility}>Customization</button>
        <p>
          WELCOME {user} room id == {roomId}
          <Chat />
        </p>
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