import CommunityComment from "./components/CommunityComment";
import CommunityCommentInput from "./components/CommunityCommentInput";
import styles from "./CommunityCommentList.module.scss";
import EmptyPage from "../../../components/EmptyPage";
import { ReasonType } from "../../../components/ReportBottomSheet/ReportBottomSheet";
import { useState } from "react";

export interface CommentProps {
  id: number;
  userId: number;
  nickName: string;
  profileUri: string;
  content: string;
  createdAt: string;
  authority: boolean;
  taggedUsers?: { userId: number; nickname: string }[];
  canEdit: boolean;
}

export interface Props {
  comments: {
    comment: CommentProps;
    replies: CommentProps[];
  }[];
  onSubmitComment: (comment: string, parentId?: number) => void;
  onSubmitUpdateComment: (commentId: number, comment: string) => void;
  onClickDeleteComment: (commentId: number) => void;
  onClickReport: (commentId: number, value: ReasonType) => void;
  onSubmitReply: (commentId: number, comment: string) => void;
  onClickUserProfile?: (userId: number) => void;
}

const CommunityCommentListView = ({
  comments = [],
  onSubmitComment,
  onSubmitUpdateComment,
  onClickDeleteComment,
  onClickReport,
  onSubmitReply,
  onClickUserProfile,
}: Props) => {
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [replyingId, setReplyingId] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        {comments.length === 0 ? (
          <EmptyPage
            type="full"
            title="남겨진 댓글이 없어요."
            description="처음으로 댓글을 남겨주시겠어요?"
          />
        ) : (
          comments.map(item => (
            <CommunityComment
              key={item.comment.id}
              comment={item.comment}
              replies={item.replies}
              onClickUserProfile={onClickUserProfile}
              onClickReply={id => {
                setReplyingId(id);
              }}
              onClickReport={onClickReport}
              onClickModifyComment={setUpdatingId}
              onClickDeleteComment={onClickDeleteComment}
            />
          ))
        )}
      </div>
      <CommunityCommentInput
        initialComment={
          updatingId
            ? comments
                .reduce(
                  (result, x) => result.concat(x.comment).concat(x.replies),
                  [] as CommentProps[],
                )
                .filter(comment => comment.id === updatingId)[0].content
            : replyingId
            ? comments
                .reduce(
                  (result, x) => result.concat(x.comment).concat(x.replies),
                  [] as CommentProps[],
                )
                .filter(comment => comment.id === replyingId)[0].content
            : undefined
        }
        onSubmitComment={value => {
          if (updatingId) {
            onSubmitUpdateComment(updatingId, value);
            setUpdatingId(null);
          } else if (replyingId) {
            onSubmitReply(replyingId, value);
            setReplyingId(null);
          } else {
            onSubmitComment(value);
          }
        }}
      />
    </div>
  );
};

export default CommunityCommentListView;
