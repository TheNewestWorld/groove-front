import classnames from "classnames";
import CircleImage from "../../../../../components/CircleImage";
import { SmallDotsIcon } from "../../../../../assets/icon";
import { convertToElapsedTime } from "./helpers";
import styles from "./CommunityCommentItem.module.scss";

export interface Props {
  nickName: string;
  profileUri: string;
  createdAt: string;
  content: string;
  hasReply?: boolean;
  taggedUsers?: { userId: number; nickname: string }[];
  onClickUserProfile?: () => void;
  onClickReply?: () => void;
  onClickOption: () => void;
  className?: string;
}

const CommunityCommentItem = ({
  nickName,
  profileUri,
  createdAt,
  content,
  hasReply = false,
  taggedUsers,
  onClickUserProfile,
  onClickReply,
  onClickOption,
  className,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <CircleImage
        className={styles.profileImage}
        src={profileUri}
        onClick={onClickUserProfile}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.writer} onClick={onClickUserProfile}>
            {nickName}
          </span>
          <span className={styles.subText}>
            {convertToElapsedTime(new Date(createdAt))}
          </span>
          {hasReply && (
            <span className={styles.subText} onClick={onClickReply}>
              답글 달기
            </span>
          )}
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
            <span className={styles.comment}>{content}</span>
          </div>
          <div className={styles.option}>
            <SmallDotsIcon
              className={styles.icon}
              onClick={() => onClickOption()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCommentItem;
