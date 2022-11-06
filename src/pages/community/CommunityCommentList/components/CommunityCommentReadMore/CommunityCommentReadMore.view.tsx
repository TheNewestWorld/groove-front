import classnames from "classnames";
import styles from "./CommunityCommentReadMore.module.scss";

export interface Props {
  isOpen: boolean;
  replyCount: number;
  className?: string;
  onClickOpen?: () => void;
  onClickClose?: () => void;
}

const CommunityCommentReadMore = ({
  isOpen,
  replyCount,
  className,
  onClickOpen,
  onClickClose,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      {isOpen ? (
        <span className={styles.open} onClick={onClickClose}>
          -답글 접기
        </span>
      ) : (
        <span onClick={onClickOpen}>-답글 {replyCount}개 더 보기</span>
      )}
    </div>
  );
};

export default CommunityCommentReadMore;
