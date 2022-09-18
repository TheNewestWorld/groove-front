import classNames from "classnames";
import {
  ChatIcon,
  HeartActiveIcon,
  HeartInactiveIcon,
} from "../../assets/icon";
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
      {liked
        ? <HeartActiveIcon className={styles.icon} />
        : <HeartInactiveIcon className={styles.icon} />}
      {likeCount}
      <ChatIcon className={styles.icon} />
      {commentCount}
    </div>
  );
};

export default CommunityFooter;
