import { useSearchParams } from "react-router-dom";
import { setPassword } from "../../../common/apis/users/setPassword";
import ResetPasswordView from "./ResetPassword.view";

const ResetPassword = () => {
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

  return <ResetPasswordView onSubmit={updatePassword} />;
};

export default ResetPassword;
