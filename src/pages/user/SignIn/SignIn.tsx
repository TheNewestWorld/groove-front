import { useState } from "react";
import { signIn } from "../../../common/apis/auth";
import SignInView from "./SignIn.view";

const SignIn = () => {
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
    />
  );
};

export default SignIn;
