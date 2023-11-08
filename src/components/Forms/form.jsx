import { useContext, useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const updateInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    props.setMethod(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.setMethod(input);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={updateInput} /> <br />
      </form>
    </>
  );
}

export default Form;
