import classnames from "classnames";
import CircleImage from "../../../../components/CircleImage";
import styles from "./CommunityCommentItem.module.scss";
import { SmallDotsIcon } from "../../../../assets/icon";

export interface Props {
  commenter: string;
  commenterImage: string;
  elpasedTime: string;
  comment: string;
  taggedUsers?: { userId: string; nickname: string }[];
  className?: string;
  onCommenterClick: () => void;
  onReplyClick: () => void;
  onOptionClick: () => void;
}

const CommunityCommentItem = ({
  commenter,
  commenterImage,
  elpasedTime,
  comment,
  taggedUsers,
  className,
  onCommenterClick,
  onReplyClick,
  onOptionClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <CircleImage
        className={styles.commenterImage}
        src={commenterImage}
        onClick={onCommenterClick}
      />
      <div className={styles.containerBody}>
        <div className={styles.header}>
          <span className={styles.commenter} onClick={onCommenterClick}>
            {commenter}
          </span>
          <span className={styles.subText}>{elpasedTime}</span>
          <span className={styles.subText} onClick={onReplyClick}>
            답글 달기
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.comment}>
            {taggedUsers &&
              taggedUsers.map(item => (
                // TODO(in.heo): userId에 맞는 유저 페이지로 이동은 추후 유저 마이페이지의 routing이 추가되면 변경하겠습니다.
                <a href={item.userId} className={styles.tag}>
                  @{item.nickname}
                </a>
              ))}
            <span className={styles.comment}>{comment}</span>
          </div>
          <div className={styles.dots}>
            <SmallDotsIcon className={styles.icon} onClick={onOptionClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCommentItem;
