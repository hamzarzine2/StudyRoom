import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProviderWrapper } from "../../contexts/ToDoContext";

const Boot = () => {
  return (
    <UserProviderWrapper>
      <RoomProviderWrapper>
        <ToDoProviderWrapper>
          <Router>
            <App />
          </Router>
        </ToDoProviderWrapper>
      </RoomProviderWrapper>
    </UserProviderWrapper>
  );
};

export default Boot;
