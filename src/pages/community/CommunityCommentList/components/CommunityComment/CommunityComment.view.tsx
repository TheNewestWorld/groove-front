import useOpen from "../../../../../hooks/useOpen";
import CommunityCommentReadMore from "../CommunityCommentReadMore";
import CommunityCommentItem, {
  Props as CommunityCommentItemType,
} from "../CommunityCommentItem";
import styles from "./CommunityComment.module.scss";

export interface Props {
  comment: CommunityCommentItemType;
  replies?: CommunityCommentItemType[];
}

const CommunityComment = ({ comment, replies }: Props) => {
  const { isOpen, onOpen, onClose } = useOpen();

  return (
    <div>
      <CommunityCommentItem {...comment} />
      {replies &&
        replies.length > 0 &&
        isOpen &&
        replies!.map((reply) => (
          <CommunityCommentItem {...reply} className={styles.reply} />
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
