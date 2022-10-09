import classnames from "classnames";
import styles from "./CommunityCommentReadMore.module.scss";

export interface Props {
  isOpen: boolean;
  replyCount: number;
  className?: string;
  onClick?: () => void;
}

const CommunityCommentReadMore = ({
  isOpen,
  replyCount,
  className,
  onClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      {isOpen && (
        <span className={styles.open} onClick={onClick}>
          -답글 접기
        </span>
      )}
      {!isOpen && <span onClick={onClick}>-답글 {replyCount}개 더 보기</span>}
    </div>
  );
};

export default CommunityCommentReadMore;
