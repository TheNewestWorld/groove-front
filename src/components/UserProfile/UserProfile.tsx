import classNames from "classnames";
import { BlueAddIcon } from "../../assets/icon";
import CircleImage from "../CircleImage";

import styles from "./UserProfile.module.scss";

export interface Props {
  src: string;
  className?: string;
  onClick?: () => void;
}

const UserProfile = ({
  src,
  className,
  onClick,
}: Props) => {
  return (
    <div className={classNames([className, styles.container])} onClick={onClick}>
      <CircleImage src={src} className={styles.userProfile}/>
      <BlueAddIcon className={styles.plusIcon}/>
    </div>
  );
};

export default UserProfile;
