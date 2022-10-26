import classNames from "classnames";

import styles from "./CommunityItem.module.scss";

import CircleImage from "../CircleImage";

import { ChatIcon, HeartIcon } from "../../assets/icon";

export interface Props {
  user: string;
  userImageSrc: string;
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  liked: boolean;
  onClick: () => void;
  className?: string;
}

const CommunityItem = ({
  user,
  userImageSrc,
  title,
  description,
  likeCount,
  commentCount,
  liked,
  onClick,
  className,
}: Props) => {
  return (
    <div
      className={classNames([styles.container, className])}
      onClick={onClick}
    >
      <div className={styles.header}>
        <CircleImage src={userImageSrc} className={styles.profile} />
        <div className={styles.nickname}>{user}</div>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <HeartIcon className={classNames([styles.icon, liked && styles.red])} />
        <div className={styles.number}>{likeCount}</div>
        <ChatIcon className={styles.icon} />
        <div className={styles.number}>{commentCount}</div>
      </div>
    </div>
  );
};

export default CommunityItem;
