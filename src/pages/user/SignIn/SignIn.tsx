import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../common/apis/auth";
import BuildPaths from "../../../common/paths";
import SignInView from "./SignIn.view";

const SignIn = () => {
  const navigation = useNavigate();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const onClickConfirm = () => {
    signIn(data)
      .then(() => {
        alert("TODO: 로그인 성공");
      })
      .catch(() => {
        alert("TODO: 로그인 실패");
      });
  };

  return (
    <SignInView
      data={data}
      onChange={(e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
      }}
      onClickConfirm={onClickConfirm}
      // TODO: 비활성화 조건 추가
      isDisabledButton={!data.email || !data.password}
      goToFindPassword={() => navigation(BuildPaths.findPassword())}
    />
  );
};

export default SignIn;
