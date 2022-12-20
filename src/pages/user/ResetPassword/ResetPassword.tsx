import { useNavigate, useSearchParams } from "react-router-dom";
import { setPassword } from "../../../common/apis/users/setPassword";
import Header from "../../../components/Header";
import ResetPasswordView from "./ResetPassword.view";
import { ArrowIcon } from "../../../assets/icon";
import { useState } from "react";
import Loading from "../../../components/Loading";
import BuildPaths from "../../../common/paths";

const ResetPassword = () => {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionKey = searchParams.get("sessionKey");
  const [isLoading, setLoading] = useState<boolean>(false);

  if (!sessionKey) {
    // TODO: 에러 표시
    return <>잘못 접근한 화면입니다.</>;
  }

  const updatePassword = (password: string) => {
    setLoading(true);
    setPassword({ sessionKey, password })
      .then(() => {
        navigation(BuildPaths.entry());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <Header left={<ArrowIcon />} onClickLeft={() => navigation(-1)} />
      <ResetPasswordView onSubmit={updatePassword} />;
    </>
  );
};

export default ResetPassword;
