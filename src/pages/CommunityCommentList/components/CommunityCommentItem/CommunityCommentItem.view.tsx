import classnames from "classnames";
import CircleImage from "../../../../components/CircleImage";
import styles from "./CommunityCommentItem.module.scss";
import { SmallDotsIcon } from "../../../../assets/icon";

export interface Props {
  writer: string;
  profileImage: string;
  createdTime: Date;
  comment: string;
  taggedUsers?: { userId: number; nickname: string }[];
  className?: string;
  onCommenterClick: () => void;
  onReplyClick: () => void;
  onOptionClick: () => void;
}

const CommunityCommentItem = ({
  writer,
  profileImage,
  createdTime,
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
        className={styles.profileImage}
        src={profileImage}
        onClick={onCommenterClick}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.writer} onClick={onCommenterClick}>
            {writer}
          </span>
          <span className={styles.subText}>
            {ConvertToElapsedTime(createdTime)}
          </span>
          <span className={styles.subText} onClick={onReplyClick}>
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
            <SmallDotsIcon className={styles.icon} onClick={onOptionClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

const times: { time: string; milliSeconds: number }[] = [
  { time: "분", milliSeconds: 1000 * 60 },
  { time: "시간", milliSeconds: 1000 * 60 * 60 },
  { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
  { time: "개월", milliSeconds: 1000 * 60 * 60 * 24 * 30 },
  { time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365 },
].reverse();

const ConvertToElapsedTime = (createdTime: Date) => {
  const now = new Date().getTime();
  const diff = now - createdTime.getTime();

  for (const value of times) {
    const elapsedTime = Math.floor(diff / value.milliSeconds);
    if (elapsedTime > 0) {
      return `${elapsedTime}${value.time}전`;
    }
  }

  return "방금 전";
};

export default CommunityCommentItem;
