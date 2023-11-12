import { Input } from 'antd';

const Chat = () => {
  return (
    <>
      <div id="divChat">
        <div id="chat-title">CHAT</div>
        <div>
          <p>Moi : Salut, comment ça va ?</p>
          <p>Ami : Ça va bien, merci !</p>
        </div>
      </div>
      <div id="message-input">
       
        <Input placeholder="Basic usage" />;
      </div>
    </>
  );
};

export default Chat;
