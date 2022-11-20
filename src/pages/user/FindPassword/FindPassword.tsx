import { useState } from "react";
import FindPasswordView from "./FindPassword.view";

const FindPassword = () => {
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  return <FindPasswordView isSubmitted={isSubmitted} />;
};

export default FindPassword;
