import classNames from "classnames";
import { ChatIcon, HeartIcon } from "../../assets/icon";
import styles from "./CommunityFooter.module.scss";

export interface Props {
  likeCount: number;
  liked?: boolean;
  commentCount: number;
  className?: string;
}

const CommunityFooter = ({
  likeCount,
  liked = false,
  commentCount,
  className,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      <HeartIcon className={classNames([styles.icon, liked && styles.liked])} />
      {likeCount}
      <ChatIcon className={styles.icon} />
      {commentCount}
    </div>
  );
};

export default CommunityFooter;
