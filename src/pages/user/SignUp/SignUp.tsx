import { useState } from "react";
import { signUp } from "../../../common/apis/users";
import SignUpView, { SignUpForm } from "./SignUp.view";

const SignUp = () => {
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  const onSubmitSignUp = ({ email, password, nickname }: SignUpForm) => {
    signUp({ email, password, nickname })
      .then(() => {
        setSubmit(true);
      })
      .catch(() => {});
  };

  return <SignUpView isSubmitted={isSubmitted} onSubmit={onSubmitSignUp} />;
};

export default SignUp;
