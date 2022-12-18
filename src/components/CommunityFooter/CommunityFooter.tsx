import classNames from "classnames";
import { ChatIcon, HeartIcon } from "../../assets/icon";
import styles from "./CommunityFooter.module.scss";

export interface Props {
  likeCount: number;
  liked?: boolean;
  commentCount: number;
  onClickLike: () => void;
  goToCommentList: () => void;
  className?: string;
}

const CommunityFooter = ({
  likeCount,
  liked = false,
  commentCount,
  onClickLike,
  goToCommentList,
  className,
}: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      <HeartIcon
        className={classNames([styles.icon, liked && styles.liked])}
        onClick={onClickLike}
      />
      {likeCount}
      <ChatIcon className={styles.icon} onClick={goToCommentList} />
      {commentCount}
    </div>
  );
};

export default CommunityFooter;
