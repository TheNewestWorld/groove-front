import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../common/apis/auth";
import { getUserInfo } from "../../../common/apis/users";
import BuildPaths from "../../../common/paths";
import Loading from "../../../components/Loading";
import { useUserDispatch, useTokenDispatch } from "../../../hooks";
import SignInView from "./SignIn.view";

const SignIn = () => {
  const navigation = useNavigate();
  const userDispatch = useUserDispatch();
  const tokenDispatch = useTokenDispatch();
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const onClickConfirm = () => {
    setLoading(true);
    signIn(data)
      .then(async ({ accessToken, refreshToken }) => {
        tokenDispatch({
          type: "SIGN_IN",
          payload: {
            accessToken,
            refreshToken,
          },
        });

        const { nickname, profileUrl } = await getUserInfo();

        userDispatch({
          type: "SET",
          payload: {
            name: nickname,
            profile: profileUrl,
          },
        });
        // TODO: 전체 게시물 탭으로 보내는지 확인
        // navigation(BuildPaths.communityHome("0"));
        navigation(BuildPaths.mypage("RECORD"));
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
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
      {isLoading && <Loading />}
    </>
  );
};

export default SignIn;
