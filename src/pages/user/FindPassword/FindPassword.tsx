import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../../common/apis/users/sendEmail";
import BuildPaths from "../../../common/paths";
import Header from "../../../components/Header";
import FindPasswordView from "./FindPassword.view";
import { ArrowIcon } from "../../../assets/icon";

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
    <>
      <Header left={<ArrowIcon />} onClickLeft={() => navigation(-1)} />
      <FindPasswordView
        isSubmitted={isSubmitted}
        onSubmit={onSubmit}
        goToEtry={() => navigation(BuildPaths.entry())}
      />
    </>
  );
};

export default FindPassword;
