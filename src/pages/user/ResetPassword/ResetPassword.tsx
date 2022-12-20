import { useNavigate, useSearchParams } from "react-router-dom";
import { setPassword } from "../../../common/apis/users/setPassword";
import Header from "../../../components/Header";
import ResetPasswordView from "./ResetPassword.view";
import { ArrowIcon } from "../../../assets/icon";

const ResetPassword = () => {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionKey = searchParams.get("sessionKey");

  if (!sessionKey) {
    // TODO: 에러 표시
    return <>잘못 접근한 화면입니다.</>;
  }

  const updatePassword = (password: string) => {
    setPassword({ sessionKey, password })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      <Header left={<ArrowIcon />} onClickLeft={() => navigation(-1)} />
      <ResetPasswordView onSubmit={updatePassword} />;
    </>
  );
};

export default ResetPassword;
