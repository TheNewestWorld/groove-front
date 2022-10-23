import styles from "./CommunityCommentList.module.scss";

import CommunityComment from "./components/CommunityComment";

import CommunityCommentInput from "./components/CommunityCommentInput";

import CommunityCommentItem, {
  Props as CommunityCommentItemType,
} from "./components/CommunityCommentItem";

import Header from "../../components/Header";

import { CloseIcon } from "../../assets/icon";
import useOpen from "../../hooks/useOpen";
import BottomSheetList from "../../components/BottomSheetList";
import { useState } from "react";

export interface Props {
  comments: {
    comment: {
      commentId: number;
      writer: string;
      profileImage: string;
      createdTime: Date;
      comment: string;
      taggedUsers?: { userId: number; nickname: string }[];
    };
    replies?: {
      commentId: number;
      writer: string;
      profileImage: string;
      createdTime: Date;
      comment: string;
      taggedUsers?: { userId: number; nickname: string }[];
    }[];
  }[];
  onClickClose: () => void;
  onClickCreateComment: (comment: string) => void;
  onClickReport: (commentId: number) => void;
}

const CommunityCommentList = ({
  comments = [],
  onClickClose,
  onClickCreateComment,
  onClickReport,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();
  const [reportId, setReportId] = useState<number>(-1);
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Header
          title="댓글"
          right={<CloseIcon />}
          onClickRight={onClickClose}
        />
        {/* TODO(ho2eny): 빈 페이지 작업 필요 */}
        {comments.map(item => (
          <CommunityComment
            comment={{
              ...item.comment,
              onClickOption: (commentId: number) => {
                setReportId(commentId);
                onOpen();
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
                        onOpen();
                      },
                    };
                  })
            }
          />
        ))}
      </div>
      <CommunityCommentInput onSubmitComment={onClickCreateComment} />
      {isOpen && (
        <BottomSheetList
          hasCloseButton={true}
          list={["신고하기"]}
          onClick={(value: string) => {
            onClickReport(reportId);
          }}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default CommunityCommentList;
