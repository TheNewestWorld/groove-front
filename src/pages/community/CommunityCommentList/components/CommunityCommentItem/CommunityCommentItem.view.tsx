import { useState } from "react";
import classnames from "classnames";
import CircleImage from "../../../../../components/CircleImage";
import { SmallDotsIcon } from "../../../../../assets/icon";
import { convertToElapsedTime } from "./helpers";
import ReportBottomSheet from "../../../../../components/ReportBottomSheet";
import BottomSheetList from "../../../../../components/BottomSheetList";
import { ReasonType } from "../../../../../components/ReportBottomSheet/ReportBottomSheet";
import styles from "./CommunityCommentItem.module.scss";

export interface Props {
  id: number;
  nickName: string;
  profileUri: string;
  createdAt: string;
  content: string;
  hasReply?: boolean;
  canEdit: boolean;
  taggedUsers?: { userId: number; nickname: string }[];
  onClickUserProfile?: () => void;
  onClickReply?: () => void;
  onClickReport: (id: number, reason: ReasonType) => void;
  onClickModifyComment: (id: number) => void;
  onClickDeleteComment: (id: number) => void;
  className?: string;
}

const CommunityCommentItem = ({
  id,
  nickName,
  profileUri,
  createdAt,
  content,
  hasReply = false,
  canEdit,
  taggedUsers,
  onClickUserProfile,
  onClickReply,
  onClickReport,
  onClickModifyComment,
  onClickDeleteComment,
  className,
}: Props) => {
  const [showReportOption, setReportOption] = useState<boolean>(false);
  const [showOption, setOption] = useState<boolean>(false);

  return (
    <>
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
                taggedUsers.map((item) => (
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
                onClick={() => setOption(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {showOption &&
        (canEdit ? (
          <BottomSheetList
            hasCloseButton={true}
            list={["수정하기", "삭제하기"]}
            onClick={(value) => {
              if (value === "수정하기") {
                onClickModifyComment(id);
              } else {
                onClickDeleteComment(id);
              }
            }}
            onClose={() => {
              setOption(false);
            }}
          />
        ) : (
          <BottomSheetList
            hasCloseButton={true}
            list={["신고하기"]}
            onClick={() => {
              setReportOption(true);
            }}
            onClose={() => {
              setOption(false);
            }}
          />
        ))}

      <ReportBottomSheet
        isShow={showReportOption}
        submitReport={(value) => onClickReport(id, value)}
        onClickClose={() => setReportOption(false)}
      />
    </>
  );
};

export default CommunityCommentItem;
