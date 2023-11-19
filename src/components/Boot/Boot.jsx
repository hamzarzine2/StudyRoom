import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProviderWrapper } from "../../contexts/ToDoContext";
import { CustomProviderWrapper } from "../../contexts/CustomContext";
import { SocketProvider } from "../../contexts/SocketContext";

const Boot = () => {
  return (
    <UserProviderWrapper>
      <SocketProvider>
        <RoomProviderWrapper>
          <CustomProviderWrapper>
            <ToDoProviderWrapper>
              <Router>
                <App />
              </Router>
            </ToDoProviderWrapper>
            </CustomProviderWrapper>
        </RoomProviderWrapper>
      </SocketProvider>
    </UserProviderWrapper>
  );
};

export default Boot;
