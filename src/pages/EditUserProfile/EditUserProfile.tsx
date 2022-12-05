import { useNavigate } from "react-router-dom";
import {
  getUserInfo,
  setUserInfo,
  setUserProfileImage,
} from "../../common/apis/users";
import { useUserState, useUserDispatch } from "../../hooks";
import EditUserProfileView from "./EditUserProfile.view";

const EditUserProfile = () => {
  const { name, profile } = useUserState();
  const dispatch = useUserDispatch();
  const navigation = useNavigate();

  return (
    <EditUserProfileView
      src={profile}
      nickname={name}
      onClose={() => navigation(-1)}
      onClickConfirm={async (newNickname, image) => {
        await setUserInfo({ nickname: newNickname });
        await setUserProfileImage({ profile: image });

        const { nickname, profileUrl } = await getUserInfo();

        dispatch({
          type: "SET",
          payload: {
            name: nickname,
            profile: profileUrl,
          },
        });

        navigation(-1);
      }}
    />
  );
};

export default EditUserProfile;
