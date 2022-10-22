import styles from "./CommunityCommentList.module.scss";

import CommunityComment, {
  Props as CommunityCommentType,
} from "./components/CommunityComment";

import CommunityCommentInput from "./components/CommunityCommentInput";

import Header from "../../components/Header";

import { CloseIcon } from "../../assets/icon";

export interface Props {
  comments?: CommunityCommentType[];
  onCloseClick: () => void;
  onSubmitComment: (comment: string) => void;
}

const CommunityCommentList = ({
  comments = [],
  onCloseClick,
  onSubmitComment,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Header
          title="댓글"
          right={<CloseIcon />}
          onClickRight={onCloseClick}
        />
        {comments.map(item => (
          <CommunityComment {...item} />
        ))}
      </div>
      <CommunityCommentInput onSubmitComment={onSubmitComment} />
    </div>
  );
};

export default CommunityCommentList;
