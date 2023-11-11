import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import { ContextRoom } from "../contexts/RoomContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import { useNavigate } from "react-router-dom";
import socketInit from "../socket/socketUtil";

function Home() {
  const navigate = useNavigate();
  const { user, setNameUser } = useContext(ContextUser);
  const { createRoom } = useContext(ContextRoom);

  const redirectRoom = () => {
    createRoom({ id: 1, user });
    navigate("/room/" + 1);
    socketInit(1);
    
  };
  const eventLog = () => {
    console.log(user);
  };

  return (
    <div id="divHome">
      <Form setMethod={setNameUser} />
      <Button value="Create a room" event={redirectRoom} />
      <Button value="Join a room" event={eventLog} />
    </div>
  );
}

export default Home;
