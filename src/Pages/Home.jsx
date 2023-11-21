import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import { ContextRoom } from "../contexts/RoomContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [roomInput, setroomInput] = useState("");

  const { user, setNameUser } = useContext(ContextUser);
  const { room, setRoomId } = useContext(ContextRoom);

  const redirectRoom = () => {
    setNameUser(name);
    io("http://localhost:4001/user",{ auth: { user: name } }, { transports: ["websocket"] });
    console.log(room.id);
    navigate("/room/" + room.id);
  };
  
  const inputName =(e)=>{
    setName(e);
  }

  return (
    <div id="divHome">
      <Form setMethod={inputName} />
      <Form setMethod={setRoomId} />
      <Button value="Join a room" event={redirectRoom} />
    </div>
  );
}

export default Home;
