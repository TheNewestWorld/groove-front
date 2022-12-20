import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../common/apis/auth";
import { getUserInfo } from "../../../common/apis/users";
import BuildPaths from "../../../common/paths";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import { useUserDispatch, useTokenDispatch } from "../../../hooks";
import SignInView from "./SignIn.view";
import { ArrowIcon } from "../../../assets/icon";

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

        const { nickname, profileUri } = await getUserInfo();

        userDispatch({
          type: "SET",
          payload: {
            name: nickname,
            profile: profileUri,
          },
        });

        localStorage.setItem("name", nickname);
        localStorage.setItem("profile", profileUri);

        navigation(BuildPaths.communityHome("전체 게시물"));
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
      {isLoading && <Loading />}
      <Header left={<ArrowIcon />} onClickLeft={() => navigation(-1)} />
      <SignInView
        data={data}
        onChange={(e) => {
          const { name, value } = e.target;

          setData({ ...data, [name]: value });
        }}
        onClickConfirm={onClickConfirm}
        isDisabledButton={!data.email || !data.password}
        goToFindPassword={() => navigation(BuildPaths.findPassword())}
      />
    </>
  );
};

export default SignIn;
