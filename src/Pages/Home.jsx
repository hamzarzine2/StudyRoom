import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import { ContextRoom } from "../contexts/RoomContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import { useNavigate } from "react-router-dom";
import socketInit from "../socket/socketUtil";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const navigate = useNavigate();
  const { user, setNameUser } = useContext(ContextUser);
  const { createRoom } = useContext(ContextRoom);

  const redirectRoom = () => {
    const userId = uuidv4();
    createRoom({ id: userId, user });
    navigate("/room/" + userId);
    socketInit(3001);
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
