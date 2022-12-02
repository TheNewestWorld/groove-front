import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../common/apis/users";
import BuildPaths from "../../../common/paths";
import SignUpView, { SignUpForm } from "./SignUp.view";

const SignUp = () => {
  const navigation = useNavigate();
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  const onSubmitSignUp = ({ email, password, nickname }: SignUpForm) => {
    signUp({ email, password, nickname })
      .then(() => {
        setSubmit(true);
      })
      .catch(() => {});
  };

  return (
    <SignUpView
      isSubmitted={isSubmitted}
      onSubmit={onSubmitSignUp}
      goToEtry={() => navigation(BuildPaths.entry())}
    />
  );
};

export default SignUp;
