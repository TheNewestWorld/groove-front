import CircleImage from "../CircleImage";

import styles from "./TrainerItem.module.scss";

import {
  ChatIcon,
  HeartActiveIcon,
  HeartInactiveIcon,
} from "../../assets/icon";

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
}: Props) => {
  return (
    <div
      className={size == "LARGE" ? styles.large : styles.small}
      onClick={onClick}>
      <CircleImage src={imageUrl} className={styles.image} />
      <div className={styles.nicknameContainer}>
        <span className={styles.nickname}>{nickname}</span>
        <span className={styles.category}>{categoryName}</span>
      </div>
      <span className={styles.introduce}>{introduce}</span>
      <div className={styles.bottom}>
        {liked ? (
          <HeartActiveIcon className={styles.icon} />
        ) : (
          <HeartInactiveIcon className={styles.icon} />
        )}
        <div className={styles.number}>{likeCount}</div>
        <ChatIcon className={styles.icon} />
        <div className={styles.number}>{commentCount}</div>
      </div>
    </div>
  );
};

export default TrainerItem;
