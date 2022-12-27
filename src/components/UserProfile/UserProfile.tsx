import { useRef, useState } from "react";
import classNames from "classnames";
import CircleImage from "../CircleImage";
import styles from "./UserProfile.module.scss";
import { BlackAddIcon } from "../../assets/icon";
import BottomSheetList from "../BottomSheetList";

export interface Props {
  src?: string;
  defaultImage: string;
  className?: string;
  onChangeProfile?: (image: File | null) => void;
}

const UserProfile = ({
  src,
  defaultImage,
  className,
  onChangeProfile,
}: Props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [showProfileBottonSheet, setProfileBottomSheet] =
    useState<boolean>(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  return (
    <>
      <input
        className={styles.hidden}
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
              const imagePreviewUrl = reader.result?.toString();
              imagePreviewUrl && setImagePreviewUrl(imagePreviewUrl);
            };
            reader.readAsDataURL(file);
            onChangeProfile?.(file);
          }
        }}
        ref={imageInput}
      />
      <div
        className={classNames([styles.container, className])}
        onClick={() => {
          setProfileBottomSheet(true);
        }}
      >
        <CircleImage
          src={imagePreviewUrl ? imagePreviewUrl : src ? src : defaultImage}
          className={styles.userProfile}
        />
        <BlackAddIcon className={styles.plusIcon} />
      </div>
      {showProfileBottonSheet && (
        <BottomSheetList
          list={["파일 선택", "이미지 삭제"]}
          onClose={() => setProfileBottomSheet(false)}
          onClick={(value) => {
            if (value === "이미지 삭제") {
              setImagePreviewUrl(defaultImage);
              onChangeProfile?.(null);
              setProfileBottomSheet(false);
            } else {
              imageInput.current?.click();
              setProfileBottomSheet(false);
            }
          }}
        />
      )}
    </>
  );
};

export default UserProfile;
