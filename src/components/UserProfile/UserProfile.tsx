import { useRef, useState } from "react";
import classNames from "classnames";
import CircleImage from "../CircleImage";
import styles from "./UserProfile.module.scss";
import { BlackAddIcon } from "../../assets/icon";
import EmptyProfile from "../../assets/icon/empty_profile.svg";

export interface Props {
  src?: string;
  className?: string;
  onChangeProfile?: (image: File) => void;
}

const UserProfile = ({ src, className, onChangeProfile }: Props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>(
    src ? src : "",
  );
  console.log(EmptyProfile);
  return (
    <div>
      <input
        className={styles.hidden}
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        onChange={e => {
          if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
              const imagePreviewUrl = reader.result?.toString();
              imagePreviewUrl && setImagePreviewUrl(imagePreviewUrl);
            };
            reader.readAsDataURL(file);
            onChangeProfile && onChangeProfile(file);
          }
        }}
        ref={imageInput}
      />
      <div
        className={classNames([className, styles.container])}
        onClick={() => imageInput.current?.click()}>
        <CircleImage
          src={imagePreviewUrl.length == 0 ? EmptyProfile : imagePreviewUrl}
          className={styles.userProfile}
        />
        <BlackAddIcon className={styles.plusIcon} />
      </div>
    </div>
  );
};

export default UserProfile;
