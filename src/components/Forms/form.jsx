import { useContext, useState } from "react";
import { ContextUser } from "../../contexts/UserContext";
import Button from "../Buttons/button";
function Form() {
  const [input, setInput] = useState("");
  const { setNameUser } = useContext(ContextUser);

  const updateInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    setNameUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setNameUser(input);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={input}
          name=""
          id="inputName"
          onChange={updateInput}
        />{" "}
        <br />
      </form>
    </>
  );
}

export default Form;
