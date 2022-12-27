import { useState } from "react";
import UserProfile from "../../../components/UserProfile";
import EmptyProfile from "../../../assets/icon/empty_profile.svg";
import Input from "../../../components/Input";
import styles from "./EditUserProfile.module.scss";
import RoundButton from "../../../components/RoundButton";

export interface Props {
  src?: string;
  nickname: string;
  onClickConfirm: (nickname: string, image: File | null) => void;
}

const EditUserProfileView = ({ src, nickname, onClickConfirm }: Props) => {
  const [newNickname, setNewNickname] = useState<string>(nickname);
  const [image, setImage] = useState<File | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const checkDisabled = (nickname: string) => {
    setIsDisabled(newNickname === nickname);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <UserProfile
          src={src}
          onChangeProfile={(image: File | null) => {
            setImage(image);
            checkDisabled(newNickname);
          }}
          defaultImage={EmptyProfile}
          className={styles.profileImage}
        />
      </div>
      <Input
        label="닉네임"
        value={newNickname}
        placeholder="8자 이내 한글 또는 영문"
        onChange={(e) => {
          checkDisabled(e.target.value);
          setNewNickname(e.target.value);
        }}
      />
      <RoundButton
        className={styles.button}
        disabled={isDisabled}
        colorTheme="dark"
        onClick={() => onClickConfirm(newNickname, image)}
      >
        저장하기
      </RoundButton>
    </div>
  );
};

export default EditUserProfileView;
