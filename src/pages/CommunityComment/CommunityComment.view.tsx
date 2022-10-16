import { useState } from "react";

import Header from "../../components/Header";
import styles from "./CommunityComment.module.scss";

import CommunityCommentItem, {
  Props as CommunityCommentItemType,
} from "./components/CommunityCommentItem";

import { CloseIcon } from "../../assets/icon";
import CommunityCommentFooter from "./components/CommunityCommentFooter";
import CommunityCommentReadMore from "./components/CommunityCommentReadMore";

interface CommentReadMore {
  isOpen: boolean;
  limit: number;
}

export interface CommentPair {
  comment: CommunityCommentItemType;
  replies: CommunityCommentItemType[];
}

export interface Props {
  comments?: CommentPair[];
  onCloseClick: () => void;
  onSubmitComment: (comment: string) => void;
}

const CommunityComment = ({
  comments = [],
  onCloseClick,
  onSubmitComment,
}: Props) => {
  const [commentsReadMore, setCommentsReadMore] = useState<CommentReadMore[]>(
    new Array(comments.length).fill({
      isOpen: true,
      limit: 10,
    }),
  );

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Header
          title="댓글"
          right={<CloseIcon />}
          onRightClick={onCloseClick}
        />
        {comments.map((item, index) => (
          <div>
            <CommunityCommentItem {...item.comment} />

            {item.replies?.length > 0 &&
              commentsReadMore[index].isOpen &&
              item.replies.map(reply => (
                <CommunityCommentItem {...reply} className={styles.reply} />
              ))}

            {item.replies?.length > 0 && (
              <CommunityCommentReadMore
                className={styles.readMore}
                isOpen={commentsReadMore[index].isOpen}
                replyCount={item.replies.length}
                onClick={() => {
                  setCommentsReadMore(
                    commentsReadMore.map((item, i) => {
                      if (index == i) {
                        return {
                          ...item,
                          ["isOpen"]: !commentsReadMore[index].isOpen,
                        };
                      } else {
                        return item;
                      }
                    }),
                  );
                }}
              />
            )}
          </div>
        ))}
      </div>
      <CommunityCommentFooter onSubmitComment={onSubmitComment} />
    </div>
  );
};

export default CommunityComment;
