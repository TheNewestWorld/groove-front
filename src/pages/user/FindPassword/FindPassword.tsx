import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../../common/apis/users/sendEmail";
import BuildPaths from "../../../common/paths";
import FindPasswordView from "./FindPassword.view";

const FindPassword = () => {
  const navigation = useNavigate();
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  const onSubmit = (email: string) => {
    sendEmail({ email })
      .then(() => {
        setSubmit(true);
      })
      .catch(() => {});
  };

  return (
    <FindPasswordView
      isSubmitted={isSubmitted}
      onSubmit={onSubmit}
      goToEtry={() => navigation(BuildPaths.entry())}
    />
  );
};

export default FindPassword;
