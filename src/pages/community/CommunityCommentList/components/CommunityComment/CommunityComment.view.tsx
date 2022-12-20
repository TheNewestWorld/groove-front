import useOpen from "../../../../../hooks/useOpen";
import CommunityCommentReadMore from "../CommunityCommentReadMore";
import CommunityCommentItem from "../CommunityCommentItem";
import styles from "./CommunityComment.module.scss";
import { ReasonType } from "../../../../../components/ReportBottomSheet/ReportBottomSheet";

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
  comment: CommentProps;
  replies?: CommentProps[];
  onClickUserProfile?: (userId: number) => void;
  onClickReply: (commentId: number) => void;
  onClickReport: (id: number, reason: ReasonType) => void;
  onClickModifyComment: (id: number) => void;
  onClickDeleteComment: (id: number) => void;
}

const CommunityComment = ({
  comment,
  replies,
  onClickUserProfile,
  onClickReply,
  onClickReport,
  onClickModifyComment,
  onClickDeleteComment,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();

  return (
    <div>
      <CommunityCommentItem
        {...comment}
        hasReply={!!replies}
        onClickUserProfile={() => onClickUserProfile!(comment.userId)}
        onClickDeleteComment={onClickDeleteComment}
        onClickModifyComment={onClickModifyComment}
        onClickReport={onClickReport}
      />
      {replies &&
        replies.length > 0 &&
        isOpen &&
        replies!.map((reply) => (
          <CommunityCommentItem
            {...reply}
            onClickUserProfile={() => onClickUserProfile!(reply.userId)}
            onClickReply={() => onClickReply(reply.id)}
            onClickDeleteComment={onClickDeleteComment}
            onClickModifyComment={onClickModifyComment}
            className={styles.reply}
            onClickReport={onClickReport}
          />
        ))}
      {replies && replies.length > 0 && (
        <CommunityCommentReadMore
          className={styles.readMore}
          isOpen={isOpen}
          replyCount={replies!.length}
          onClickOpen={onOpen}
          onClickClose={onClose}
        />
      )}
    </div>
  );
};

export default CommunityComment;
