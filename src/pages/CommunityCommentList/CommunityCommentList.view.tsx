import { useState } from "react";
import useOpen from "../../hooks/useOpen";
import BottomSheetList from "../../components/BottomSheetList";
import CommunityComment from "./components/CommunityComment";
import CommunityCommentInput from "./components/CommunityCommentInput";
import { Props as CommunityCommentItemType } from "./components/CommunityCommentItem";
import Header from "../../components/Header";
import { CloseIcon } from "../../assets/icon";
import styles from "./CommunityCommentList.module.scss";

interface CommentInfo {
  commentId: number;
  writer: string;
  profileImage: string;
  createdTime: Date;
  comment: string;
  taggedUsers?: { userId: number; nickname: string }[];
}

const NOT_SETTING = -1;

export interface Props {
  comments: {
    comment: CommentInfo;
    replies?: CommentInfo[];
  }[];
  onClose: () => void;
  onSubmitComment: (comment: string) => void;
  onClickReport: (commentId: number) => void;
}

const CommunityCommentList = ({
  comments = [],
  onClose,
  onSubmitComment,
  onClickReport,
}: Props) => {
  const {
    isOpen: isOpenOption,
    onOpen: onOpenOption,
    onClose: onCloseOption,
  } = useOpen();
  const [reportId, setReportId] = useState<number>(NOT_SETTING);

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Header title="댓글" right={<CloseIcon />} onClickRight={onClose} />
        {/* TODO(ho2eny): 빈 페이지 작업 필요 */}
        {comments.map(item => (
          <CommunityComment
            comment={{
              ...item.comment,
              onClickOption: (commentId: number) => {
                setReportId(commentId);
                onOpenOption();
              },
              // TODO(ho2eny): onClickReply 이벤트 처리 필요
            }}
            replies={
              !item.replies
                ? undefined
                : item.replies!.map((reply): CommunityCommentItemType => {
                    return {
                      ...reply,
                      onClickOption: (commentId: number) => {
                        setReportId(commentId);
                        onOpenOption();
                      },
                    };
                  })
            }
          />
        ))}
      </div>
      <CommunityCommentInput onSubmitComment={onSubmitComment} />
      {isOpenOption && (
        <BottomSheetList
          hasCloseButton={true}
          list={["신고하기"]}
          onClick={(value: string) => {
            onClickReport(reportId);
          }}
          onClose={onCloseOption}
        />
      )}
    </div>
  );
};

export default CommunityCommentList;
