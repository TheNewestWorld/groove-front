import classNames from "classnames";
import { Fragment } from "react";
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
      <div className={classNames(styles.iconContainer)} onClick={onClickLike}>
        <HeartIcon
          className={classNames([styles.icon, liked && styles.liked])}
        />
        {likeCount}
      </div>
      <div
        className={classNames(styles.iconContainer)}
        onClick={goToCommentList}
      >
        <ChatIcon className={styles.icon} />
        {commentCount}
      </div>
    </div>
  );
};

export default CommunityFooter;
