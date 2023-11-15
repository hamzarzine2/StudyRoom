import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";

const ChatContext = React.createContext(null);

const ChatProviderWrapper = (props) => {
  const [chat, setChat] = useState([
    { id: 1, user: "Moi", message: "Salute mon guy, comment va ?" },
    { id: 2, user: "Lui", message: "Bien et toi ?" },
  ]);
  const { socket, updateChat } = useContext(SocketContext); // Utilisez le hook useSocket

  socket.on("updated-chat", (newChat) => {
    setChat(newChat);
  });

  socket.on("get-chat", (socketId) => {
    socket.emit("return-chat", chat, socketId);
  });

  const getChat = () => chat;

  const addMessage = (newMessage) => {
    const updatedMessages = [...chat, newMessage];
    setChat(updatedMessages);
    updateChat(updatedMessages);
  };

  const exposed = {
    getChat,
    addMessage,
  };

  return (
    <ChatContext.Provider value={exposed}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProviderWrapper };
