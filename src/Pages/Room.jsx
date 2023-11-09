import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import Timer from "../components/Timer/Timer";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import TodoList from "../components/TodoList/TodoList";
import Customization from "../components/Customization/Customization";

function Room() {
  const { user } = useContext(ContextUser);
  const param = useParams().id;

  return (
    <>
      <div id="divRoom1">
        <Timer /> <br />
        <Customization />
      </div>
      <div id="divRoom2">
        <p>
          WELCOME {user} room id == {param}
        </p>{" "}
      </div>
      <div id="divRoom3">
        <div id="divTodo">
          <TodoList />
        </div>

        <Chat />
      </div>
    </>
  );
}

export default Room;
