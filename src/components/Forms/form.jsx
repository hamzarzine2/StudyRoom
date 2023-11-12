import React from "react";

const Form = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(); 
  };

  const handleInputChange = (e) => {
    props.setMethod(e.target.value)
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={props.input}
          onChange={handleInputChange}
        />{" "}
        <br />
      </form>
    </>
  );
};

export default Form;
