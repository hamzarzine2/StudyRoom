import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProviderWrapper } from "../../contexts/ToDoContext";

const Boot = () => {
  return (
    <ToDoProviderWrapper>
      <RoomProviderWrapper>
        <UserProviderWrapper>
          <Router>
            <App />
          </Router>
        </UserProviderWrapper>
      </RoomProviderWrapper>
    </ToDoProviderWrapper>
  );
};

export default Boot;
