import { useState } from "react";
import SignUpView from "./SignUp.view";

const SignUp = () => {
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  return <SignUpView isSubmitted={isSubmitted} />;
};

export default SignUp;
