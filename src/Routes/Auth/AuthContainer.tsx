import React, { useState, FormEvent } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOGIN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const [requestSecret] = useMutation(LOGIN, {
    update: (_, { data }) => {
      const { requestSecret } = data as any;
      if (!requestSecret) {
        toast.error("계정이 없습니다. 새로 만들어 주세요.");
        setTimeout(() => setAction("signUp"), 2000);
      }
    },
    variables: { email: email.value }
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("이메일은 필수입니다.");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount({ email, firstName, lastName });
      } else {
        toast.error("모든 필드에 값을 입력하세요.");
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
