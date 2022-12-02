import { useState } from "react";
import { sendEmail } from "../../../common/apis/users/sendEmail";
import FindPasswordView from "./FindPassword.view";

const FindPassword = () => {
  const [isSubmitted, setSubmit] = useState<boolean>(false);

  const onSubmit = (email: string) => {
    sendEmail({ email })
      .then(() => {
        setSubmit(true);
      })
      .catch(() => {});
  };

  return <FindPasswordView isSubmitted={isSubmitted} onSubmit={onSubmit} />;
};

export default FindPassword;
