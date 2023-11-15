import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import { ContextRoom } from "../contexts/RoomContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/SocketContext";

function Home() {
  const navigate = useNavigate();
  const { user, setNameUser } = useContext(ContextUser);
  const { room, setRoomId } = useContext(ContextRoom);
  const redirectRoom = () => {
    navigate("/room/" + room.id);
  };

  return (
    <div id="divHome">
      <Form setMethod={setNameUser} />
      <Form setMethod={setRoomId} />
      <Button value="Join a room" event={redirectRoom} />
    </div>
  );
}

export default Home;
