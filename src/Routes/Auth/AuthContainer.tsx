import React, { useState, FormEvent } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOGIN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const [requestSecret] = useMutation(LOGIN, {
    variables: { email: email.value }
  });

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (email.value !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};
