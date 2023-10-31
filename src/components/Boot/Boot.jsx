import App from "../../App";
import { UserProviderWrapper } from "../../contexts/UserContext";
import { RoomProviderWrapper } from "../../contexts/RoomContext";
import { BrowserRouter as Router } from "react-router-dom";

const Boot = () => {
  return (
    <RoomProviderWrapper>
      <UserProviderWrapper>
        <Router>
          <App />
        </Router>
      </UserProviderWrapper>
    </RoomProviderWrapper>
  );
};

export default Boot;
