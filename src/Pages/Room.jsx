import { useState, useContext } from "react";
import { ContextUser } from "../contexts/UserContext";
import Form from "../components/Forms/form";
import Button from "../components/Buttons/button";
import { useParams } from "react-router-dom";
function Room() {
  const { user } = useContext(ContextUser);
  const param = useParams().id;

  return (
    <>
      <div>
        <p>
          WELCOLE {user} room id == {param}
        </p>
      </div>
    </>
  );
}

export default Room;
