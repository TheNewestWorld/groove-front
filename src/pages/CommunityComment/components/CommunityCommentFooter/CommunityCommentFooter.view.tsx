import { useState } from "react";

import { PencilIcon } from "../../../../assets/icon";

import styles from "./CommunityCommentFooter.module.scss";

export interface Props {
  onSubmitComment: (comment: string) => void;
}

const CommunityCommentFooter = ({ onSubmitComment }: Props) => {
  const [comment, setComment] = useState<string>("");

  return (
    <div className={styles.container}>
      <textarea
        value={comment}
        rows={1}
        placeholder="댓글을 작성해주세요."
        onChange={e => setComment(e.target.value)}
      />
      <PencilIcon
        className={styles.submit}
        onClick={() => {
          onSubmitComment(comment);
          setComment("");
        }}
      />
    </div>
  );
};

export default CommunityCommentFooter;
