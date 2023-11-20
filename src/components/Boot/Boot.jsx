import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProviderWrapper } from "../../contexts/ToDoContext";
import { SocketProvider } from "../../contexts/SocketContext";
import { ChatProviderWrapper } from "../../contexts/ChatContext";

const Boot = () => {
  return (
    <UserProviderWrapper>
      <SocketProvider>
        <RoomProviderWrapper>
          <ChatProviderWrapper>
            <ToDoProviderWrapper>
              <Router>
                <App />
              </Router>
            </ToDoProviderWrapper>
          </ChatProviderWrapper>
        </RoomProviderWrapper>
      </SocketProvider>
    </UserProviderWrapper>
  );
};

export default Boot;
