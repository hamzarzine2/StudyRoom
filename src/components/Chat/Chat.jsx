import { useState, useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import { ContextUser } from "../../contexts/UserContext";
import ChatLine from "../ChatLine/ChatLine";
import Form from "../Forms/form";
import Button from "../Buttons/button";

const Chat = () => {
  const [input, setInput] = useState("");
  const { getChat, addMessage } = useContext(ChatContext);
  const { user } = useContext(ContextUser);
  const messageList = getChat();

  const handleSubmit = () => {
    addMessage({
      id: messageList.length + 1, 
      user,
      message: input
    });
    setInput("");
  };

  return (
    <div id="chat">
      <div id="chat-title"> CHAT </div>

      {messageList.map((item, index) => (
        <ChatLine key={index} props={item} />
      ))}
      <Form setMethod={setInput} input={input} onSubmit={handleSubmit} />
      <div className="buttonContainer">
        <Button event={handleSubmit} value={"Send"} class="sendButton" />
      </div>
    </div>
  );
};

export default Chat;
