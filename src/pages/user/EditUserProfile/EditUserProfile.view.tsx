import { useState } from "react";
import Header from "../../../components/Header";
import UserProfile from "../../../components/UserProfile";
import Input from "../../../components/Input";
import styles from "./EditUserProfile.module.scss";
import { ArrowIcon } from "../../../assets/icon";
import EmptyProfile from "../../../assets/icon/empty_profile.svg";
import RoundButton from "../../../components/RoundButton";

export interface Props {
  src?: string;
  nickname: string;
  onClose: () => void;
  onClickConfirm: (nickname: string, image: File | null) => void;
}

const EditUserProfileView = ({
  src,
  nickname,
  onClose,
  onClickConfirm,
}: Props) => {
  const [newNickname, setNewNickname] = useState<string>(nickname);
  const [image, setImage] = useState<File | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const checkDisabled = (image: File | null, nickname: string) => {
    setIsDisabled(!image && newNickname === nickname);
  };

  return (
    <div className={styles.container}>
      <Header title="프로필 수정" left={<ArrowIcon />} onClickLeft={onClose} />
      <div className={styles.profile}>
        <UserProfile
          src={src}
          onChangeProfile={(image: File) => {
            setImage(image);
            checkDisabled(image, newNickname);
          }}
          defaultImage={EmptyProfile}
        />
      </div>
      <Input
        label="닉네임"
        value={newNickname}
        placeholder="8자 이내 한글 또는 영문"
        onChange={(e) => {
          checkDisabled(image, e.target.value);
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
