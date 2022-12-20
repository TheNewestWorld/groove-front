import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import {
  getUserInfo,
  setUserInfo,
  setUserProfileImage,
} from "../../../common/apis/users";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import { useUserState, useUserDispatch } from "../../../hooks";
import EditUserProfileView from "./EditUserProfile.view";

const EditUserProfile = () => {
  const { name, profile } = useUserState();
  const dispatch = useUserDispatch();
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <>
      {isLoading && <Loading />}
      <Header
        title="프로필 수정"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <EditUserProfileView
        src={profile}
        nickname={name}
        onClickConfirm={async (newNickname, image) => {
          setLoading(true);

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
          setLoading(false);
        }}
      />
    </>
  );
};

export default EditUserProfile;
