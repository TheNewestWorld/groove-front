import useOpen from "../../../../../hooks/useOpen";
import CommunityCommentReadMore from "../CommunityCommentReadMore";
import CommunityCommentItem, {
  Props as CommunityCommentItemType,
} from "../CommunityCommentItem";
import styles from "./CommunityComment.module.scss";

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
  comment: CommentProps;
  replies?: CommentProps[];
  onClickUserProfile?: (userId: number) => void;
  onClickReply: (commentId: number) => void;
  onClickOption: (commentId: number, hasAuthority: boolean) => void;
}

const CommunityComment = ({
  comment,
  replies,
  onClickUserProfile,
  onClickReply,
  onClickOption,
}: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();

  return (
    <div>
      <CommunityCommentItem
        {...comment}
        hasReply={true}
        onClickUserProfile={() => onClickUserProfile!(comment.userId)}
        onClickReply={() => onClickReply(comment.id)}
        onClickOption={() => onClickOption(comment.id, comment.authority)}
      />
      {replies &&
        replies.length > 0 &&
        isOpen &&
        replies!.map(reply => (
          <CommunityCommentItem
            {...reply}
            onClickUserProfile={() => onClickUserProfile!(reply.userId)}
            onClickReply={() => onClickReply(reply.id)}
            onClickOption={() => onClickOption(reply.id, reply.authority)}
            className={styles.reply}
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
