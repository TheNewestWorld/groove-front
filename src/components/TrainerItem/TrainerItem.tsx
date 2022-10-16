import classNames from "classnames";
import CircleImage from "../CircleImage";

import styles from "./TrainerItem.module.scss";

import { ChatIcon, HeartIcon } from "../../assets/icon";

export interface Props {
  imageUrl: string;
  nickname: string;
  categoryName: string;
  introduce: string;
  liked?: boolean;
  likeCount: number;
  commentCount: number;
  size?: "SMALL" | "LARGE";
  onClick?: () => void;
  className?: string;
}

const TrainerItem = ({
  imageUrl,
  nickname,
  categoryName,
  introduce,
  liked = false,
  likeCount,
  commentCount,
  onClick,
  size = "SMALL",
  className,
}: Props) => {
  return (
    <div
      className={classNames([
        size == "LARGE" ? styles.large : styles.small,
        className,
      ])}
      onClick={onClick}>
      <CircleImage src={imageUrl} className={styles.image} />
      <div className={styles.nicknameContainer}>
        <span className={styles.nickname}>{nickname}</span>
        <span className={styles.category}>{categoryName}</span>
      </div>
      <span className={styles.introduce}>{introduce}</span>
      <div className={styles.bottom}>
        <HeartIcon
          className={classNames([styles.icon, liked && styles.liked])}
        />
        <div className={styles.number}>{likeCount}</div>
        <ChatIcon className={styles.icon} />
        <div className={styles.number}>{commentCount}</div>
      </div>
    </div>
  );
};

export default TrainerItem;
