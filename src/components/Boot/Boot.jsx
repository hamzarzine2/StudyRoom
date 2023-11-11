import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProviderWrapper } from "../../contexts/ToDoContext";
import { SocketProvider } from "../../contexts/SocketContext";

const Boot = () => {
  return (
    <UserProviderWrapper>
    <RoomProviderWrapper>
      <SocketProvider>
        <ToDoProviderWrapper>
          <Router>
            <App />
          </Router>
        </ToDoProviderWrapper>
      </SocketProvider>
    </RoomProviderWrapper>
  </UserProviderWrapper>
  );
};

export default Boot;
