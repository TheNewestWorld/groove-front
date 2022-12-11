import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserInfo,
  setUserInfo,
  setUserProfileImage,
} from "../../../common/apis/users";
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
      <EditUserProfileView
        src={profile}
        nickname={name}
        onClose={() => navigation(-1)}
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
      {isLoading && <Loading />}
    </>
  );
};

export default EditUserProfile;
