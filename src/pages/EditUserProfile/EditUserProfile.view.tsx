import { useState } from "react";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import Input from "../../components/Input";
import Form from "../../components/Form";
import styles from "./EditUserProfile.module.scss";
import { ArrowIcon } from "../../assets/icon";

export interface Props {
  onClose: () => void;
  onClickConfirm: (image: File, nickname: string) => void;
}

const EditUserProfileView = ({ onClose, onClickConfirm }: Props) => {
  const [nickname, setNickname] = useState<string>("");
  const [image, setImage] = useState<File | null>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <Header title="프로필 수정" left={<ArrowIcon />} onClickLeft={onClose} />
      <div className={styles.profile}>
        <UserProfile
          onChangeProfile={(image: File) => {
            setImage(image);
            setIsDisabled(image.size == 0 || nickname.length == 0);
          }}
        />
      </div>
      <Form
        buttonText="저장하기"
        isDisabledButton={isDisabled}
        buttonColorTheme="dark"
        onClick={() => {
          image && onClickConfirm(image, nickname);
        }}>
        <Input
          label="닉네임"
          value={nickname}
          placeholder="8자 이내 한글 또는 영문"
          onChange={e => {
            setNickname(e.target.value);
            setIsDisabled(
              !image || image.size == 0 || e.target.value.length == 0,
            );
          }}
        />
      </Form>
    </div>
  );
};

export default EditUserProfileView;
