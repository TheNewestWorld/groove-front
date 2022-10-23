import classnames from "classnames";
import CircleImage from "../../../../components/CircleImage";
import styles from "./CommunityCommentItem.module.scss";
import { SmallDotsIcon } from "../../../../assets/icon";
import { convertToElapsedTime } from "./helpers";

export interface Props {
  className?: string;
  commentId: number;
  writer: string;
  profileImage: string;
  createdTime: Date;
  comment: string;
  taggedUsers?: { userId: number; nickname: string }[];
  onClickCommenter?: () => void;
  onClickReply?: () => void;
  onClickOption: (commentId: number) => void;
}

const CommunityCommentItem = ({
  commentId,
  writer,
  profileImage,
  createdTime,
  comment,
  taggedUsers,
  className,
  onClickCommenter,
  onClickReply,
  onClickOption,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <CircleImage
        className={styles.profileImage}
        src={profileImage}
        onClick={onClickCommenter}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.writer} onClick={onClickCommenter}>
            {writer}
          </span>
          <span className={styles.subText}>
            {convertToElapsedTime(createdTime)}
          </span>
          <span className={styles.subText} onClick={onClickReply}>
            답글 달기
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.comment}>
            {taggedUsers &&
              taggedUsers.map(item => (
                // TODO(in.heo): userId에 맞는 유저 페이지로 이동은 추후 유저 마이페이지의 routing이 추가되면 변경하겠습니다.
                <a href={item.userId.toString()} className={styles.tag}>
                  @{item.nickname}
                </a>
              ))}
            <span className={styles.comment}>{comment}</span>
          </div>
          <div className={styles.option}>
            <SmallDotsIcon
              className={styles.icon}
              onClick={() => {
                onClickOption(commentId);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCommentItem;
