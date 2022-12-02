import { useSearchParams } from "react-router-dom";
import ResetPasswordView from "./ResetPassword.view";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("sessionKey");

  // 디코딩하기
  console.log(query);

  return <ResetPasswordView />;
};

export default ResetPassword;
