import { useContext } from "react";
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

  joinRoom(roomId);

  return (
    <>
      <div id="divRoom1">
        <Timer /> <br />
        <Customization />
      </div>
      <div id="divRoom2">
        <p>
          WELCOME {user} room id == {roomId}
        </p>{" "}
      </div>
      <div id="divRoom3">
        <div id="divTodo">
          <TodoList />
        </div>
        <Chat />
      </div>
    </>
  );
}

export default Room;