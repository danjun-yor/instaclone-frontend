import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      firstName={firstName}
      lastName={lastName}
      email={email}
    />
  );
};
