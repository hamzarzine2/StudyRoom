import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContextRoom = React.createContext(null);

const RoomProviderWrapper = (props) => {
  const [room, setRoom] = useState({ id: "default", users: [] });

  const setRoomId = (newRoomId) => {
    setRoom({ ...room, id: newRoomId });
  };

  const exposed = {
    room,
    setRoom,
    setRoomId,
  };

  return (
    <ContextRoom.Provider value={exposed}>
      {props.children}
    </ContextRoom.Provider>
  );
};

export { ContextRoom, RoomProviderWrapper };
