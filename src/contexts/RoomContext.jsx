import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContextRoom = React.createContext(null);

const RoomProviderWrapper = (props) => {
  const [room, setRoom] = useState({ id: "", users: [] });

  const createRoom = (newRoom) => {
    setRoom(newRoom);
  };

  const exposed = {
    room,
    createRoom,
  };

  return (
    <ContextRoom.Provider value={exposed}>
      {props.children}
    </ContextRoom.Provider>
  );
};

export { ContextRoom, RoomProviderWrapper };
