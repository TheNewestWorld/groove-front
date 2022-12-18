import BottomSheetList from "../../../components/BottomSheetList";
import CommunityComment from "./components/CommunityComment";
import CommunityCommentInput from "./components/CommunityCommentInput";
import Header from "../../../components/Header";
import { CloseIcon } from "../../../assets/icon";
import styles from "./CommunityCommentList.module.scss";
import { useState } from "react";
import EmptyPage from "../../../components/EmptyPage";

export interface CommentProps {
  id: number;
  userId: number;
  nickName: string;
  profileUri: string;
  content: string;
  createdAt: string;
  authority: boolean;
  taggedUsers?: { userId: number; nickname: string }[];
}

export interface Props {
  comments: {
    comment: CommentProps;
    replies: CommentProps[];
  }[];
  optionStatus: {
    commentId: number;
    canEdit: boolean;
  } | null;
  onClose: () => void;
  onSubmitComment: (comment: string, parentId?: number) => void;
  onClickUpdateOption: (commentId: number) => void;
  onClickDeleteOption: (commentId: number) => void;
  onClickReportOption: (commentId: number) => void;
  onClickReply: (commentId: number) => void;
  onClickOption: (commentId: number, hasAuthority: boolean) => void;
  onCloseOption: () => void;
  onClickUserProfile?: (userId: number) => void;
}

const CommunityCommentListView = ({
  comments = [],
  optionStatus,
  onClose,
  onSubmitComment,
  onClickUpdateOption,
  onClickDeleteOption,
  onClickReportOption,
  onClickReply,
  onClickOption,
  onCloseOption,
  onClickUserProfile,
}: Props) => {
  const [isOpenOption, setOpenOption] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Header title="댓글" right={<CloseIcon />} onClickRight={onClose} />
        {comments.length === 0 ? (
          <EmptyPage
            type="full"
            title="남겨진 댓글이 없어요. 🥲"
            description="처음으로 댓글을 남겨주시겠어요?"
          />
        ) : (
          comments.map((item) => (
            <CommunityComment
              comment={item.comment}
              replies={item.replies}
              onClickUserProfile={onClickUserProfile}
              onClickReply={onClickReply}
              onClickOption={(comemntId: number, hasAuthority: boolean) => {
                setOpenOption(true);
                onClickOption(comemntId, hasAuthority);
              }}
            />
          ))
        )}
      </div>
      <CommunityCommentInput onSubmitComment={onSubmitComment} />
      {optionStatus &&
        isOpenOption &&
        (optionStatus.canEdit ? (
          <BottomSheetList
            hasCloseButton={true}
            list={["수정하기", "삭제하기"]}
            onClick={(value: string) => {
              if (value === "수정하기") {
                onClickUpdateOption(optionStatus!.commentId);
              } else {
                onClickDeleteOption(optionStatus!.commentId);
              }
            }}
            onClose={() => {
              setOpenOption(false);
              onCloseOption();
            }}
          />
        ) : (
          <BottomSheetList
            hasCloseButton={true}
            list={["신고하기"]}
            onClick={(value: string) => {
              onClickReportOption(optionStatus!.commentId);
            }}
            onClose={() => {
              setOpenOption(false);
              onCloseOption();
            }}
          />
        ))}
    </div>
  );
};

export default CommunityCommentListView;
