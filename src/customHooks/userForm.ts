import React, { useState } from "react";
import { errorsProps } from "../types";
import { checkValues, isThereAnyError } from "../utils";

const useForm = () => {
  const [userInformation, setUserInformation] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    flagForuserNameErrors: false,
    userNameError: "",
    flagForPasswordError: false,
    passwordError: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: errorsProps = checkValues(userInformation);
    const hasAnyErrors: boolean = isThereAnyError(errors);
    if (!hasAnyErrors) {
      console.log("No Errors")
    } else setErrors(errors);
  };

  const returnValues = { handleChange, handleSubmit, userInformation,errors };
  return returnValues;
};
export default useForm;
