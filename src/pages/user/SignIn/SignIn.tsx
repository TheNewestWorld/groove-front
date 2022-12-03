import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../common/apis/auth";
import BuildPaths from "../../../common/paths";
import { useUserDispatch } from "../../../hooks";
import SignInView from "./SignIn.view";

const SignIn = () => {
  const navigation = useNavigate();
  const dispatch = useUserDispatch();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const onClickConfirm = () => {
    signIn(data)
      .then(({ accessToken, refreshToken }) => {
        dispatch({
          type: "SIGN_IN",
          payload: {
            name: "",
            accessToken,
            refreshToken,
          },
        });
        // TODO: 전체 게시물 탭으로 보내는지 확인
        // navigation(BuildPaths.communityHome("0"));
        navigation(BuildPaths.mypage("RECORD"));
      })
      .catch((error) => {
        alert(error.message);
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
