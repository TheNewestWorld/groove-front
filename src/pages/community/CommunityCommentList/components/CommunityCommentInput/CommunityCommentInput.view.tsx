import { useState } from "react";

import { PencilIcon } from "../../../../../assets/icon";

import styles from "./CommunityCommentInput.module.scss";

export interface Props {
  onSubmitComment: (comment: string) => void;
}

const CommunityCommentInput = ({ onSubmitComment }: Props) => {
  const [comment, setComment] = useState<string>("");

  return (
    <div className={styles.container}>
      {/* TODO(ho2eny): 이 부분은 추후에 다시 한 번 확인해보겠습니다 */}
      <textarea
        value={comment}
        rows={1}
        placeholder="댓글을 작성해주세요."
        onChange={(e) => setComment(e.target.value)}
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

export default CommunityCommentInput;
