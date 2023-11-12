// SocketContext.js
import React, { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(io("http://localhost:4001"));

  socket.on("chat message", (message) => {
    console.log(message);
  });

  // socket.on("")
  
  const joinRoom = (roomId) => {
    console.log("joining room ", roomId)
    socket.emit("join room", roomId);
  };

  const updateToDo = (toDoList) => {
    console.log("update-todolist ", toDoList);
    socket.emit("update-todolist", toDoList);
  };

  const value = {
    socket,
    joinRoom,
    updateToDo,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
