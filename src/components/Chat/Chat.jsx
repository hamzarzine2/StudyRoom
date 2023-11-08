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
        <input name="usermsg" type="text" id="usermsg" />
        <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
      </div>
    </>
  );
};

export default Chat;
