import React, { useState } from "react";

const ContextUser = React.createContext(null);

const UserProviderWrapper = (props) => {
  const [user, setUser] = useState("userName");

  const setNameUser = (newName) => {
    console.log(newName);
    setUser(newName);
  };

  const exposed = {
    user,
    setNameUser,
  };

  return (
    <ContextUser.Provider value={exposed}>
      {props.children}
    </ContextUser.Provider>
  );
};

export { ContextUser, UserProviderWrapper };
