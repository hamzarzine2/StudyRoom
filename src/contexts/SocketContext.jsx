// SocketContext.js
import React, { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const socketInit = (roomId) => {
    let socket2 = io("http://localhost:4001");
    socket2.emit("join room", "test");
    socket2.emit("chat message", "test", "test");
    socket2.on("chat message", (message) => {
      console.log(message);
    });

    setSocket(socket2);
  };

  const updateToDo = (toDoList) => {
    console.log("rezerz", toDoList);
    socket.emit("update-socket", toDoList, "test");
  };

  const value = {
    socket,
    socketInit,
    updateToDo,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
