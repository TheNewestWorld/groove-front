import CommunityComment from "./components/CommunityComment";
import CommunityCommentInput from "./components/CommunityCommentInput";
import styles from "./CommunityCommentList.module.scss";
import EmptyPage from "../../../components/EmptyPage";
import { ReasonType } from "../../../components/ReportBottomSheet/ReportBottomSheet";

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
  onClickUpdateComment: (commentId: number) => void;
  onClickDeleteComment: (commentId: number) => void;
  onClickReport: (commentId: number, value: ReasonType) => void;
  onClickReply: (commentId: number) => void;
  onClickUserProfile?: (userId: number) => void;
}

const CommunityCommentListView = ({
  comments = [],
  onSubmitComment,
  onClickUpdateComment,
  onClickDeleteComment,
  onClickReport,
  onClickReply,
  onClickUserProfile,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
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
              onClickReport={onClickReport}
              onClickModifyComment={onClickUpdateComment}
              onClickDeleteComment={onClickDeleteComment}
            />
          ))
        )}
      </div>
      <CommunityCommentInput onSubmitComment={onSubmitComment} />
    </div>
  );
};

export default CommunityCommentListView;
