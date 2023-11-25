// SocketContext.js
import React, { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(io("http://localhost:4001", {}));
  
  const joinRoom = (roomId) => {
    socket.emit("join room", roomId);
  };

  const updateToDoList = (toDoList) => {
    console.log("updateToDoList : ", toDoList);
    socket.emit("update-todolist", toDoList);
  };

  const updateChat = (chat) => {
    socket.emit("update-chat", chat);
  };


  const value = {
    socket,
    joinRoom,
    updateToDoList,
    updateChat,
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
