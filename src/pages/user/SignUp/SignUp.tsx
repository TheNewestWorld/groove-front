import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../common/apis/users";
import BuildPaths from "../../../common/paths";
import Loading from "../../../components/Loading";
import SignUpView, { SignUpForm } from "./SignUp.view";

const SignUp = () => {
  const navigation = useNavigate();
  const [isSubmitted, setSubmit] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmitSignUp = ({ email, password, nickname }: SignUpForm) => {
    setLoading(true);
    signUp({ email, password, nickname })
      .then(() => {
        setSubmit(true);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SignUpView
        isSubmitted={isSubmitted}
        onSubmit={onSubmitSignUp}
        goToEtry={() => navigation(BuildPaths.entry())}
      />
      {isLoading && <Loading />}
    </>
  );
};

export default SignUp;
