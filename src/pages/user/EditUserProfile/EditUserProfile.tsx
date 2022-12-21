import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import {
  getUserInfo,
  setUserInfo,
  setUserProfileImage,
} from "../../../common/apis/users";
import useUserInfoQuery from "../../../common/queries/users/useUserInfoQuery";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import { useUserDispatch } from "../../../hooks";
import EditUserProfileView from "./EditUserProfile.view";

const EditUserProfile = () => {
  const { isLoading, isError, data: userInfo } = useUserInfoQuery();

  const dispatch = useUserDispatch();
  const navigation = useNavigate();
  const [isUpdating, setUpdating] = useState<boolean>(false);

  if (isLoading || !userInfo) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isUpdating && <Loading />}
      <Header
        title="프로필 수정"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <EditUserProfileView
        src={userInfo.profileUri}
        nickname={userInfo.nickname}
        onClickConfirm={async (newNickname, image) => {
          setUpdating(true);

          await setUserInfo({ nickname: newNickname });
          await setUserProfileImage({ profile: image });

          const { nickname, profileUri } = await getUserInfo();

          dispatch({
            type: "SET",
            payload: {
              name: nickname,
              profile: profileUri,
            },
          });

          navigation(-1);
          setUpdating(false);
        }}
      />
    </>
  );
};

export default EditUserProfile;
