import { useState } from "react";

import styles from "./CommunityComment.module.scss";

import CommunityCommentItem, {
  Props as CommunityCommentItemType,
} from "../CommunityCommentItem";

import CommunityCommentReadMore from "../CommunityCommentReadMore";

export interface Props {
  comment: CommunityCommentItemType;
  replies?: CommunityCommentItemType[];
}

const CommunityComment = ({ comment, replies }: Props) => {
  const [readMore, setReadMore] = useState<{ isOpen: boolean; limit: number }>({
    isOpen: false,
    limit: 10,
  });

  return (
    <div>
      <CommunityCommentItem {...comment} />

      {replies &&
        replies.length > 0 &&
        readMore.isOpen &&
        replies!.map(reply => (
          <CommunityCommentItem {...reply} className={styles.reply} />
        ))}

      {replies && replies.length > 0 && (
        <CommunityCommentReadMore
          className={styles.readMore}
          isOpen={readMore.isOpen}
          replyCount={replies!.length}
          onClickOpen={() => {
            setReadMore({
              isOpen: true,
              limit: readMore.limit,
            });
          }}
          onClickClose={() => {
            setReadMore({
              isOpen: false,
              limit: readMore.limit,
            });
          }}
        />
      )}
    </div>
  );
};

export default CommunityComment;
