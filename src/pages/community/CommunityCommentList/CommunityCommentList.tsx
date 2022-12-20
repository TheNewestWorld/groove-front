import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../../assets/icon";
import {
  deleteComment,
  postComment,
  updateComment,
} from "../../../common/apis/comment";
import { postReport } from "../../../common/apis/reports";
import Header from "../../../components/Header";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import { ReasonType } from "../../../components/ReportBottomSheet/ReportBottomSheet";
import CommunityCommentListView from "./CommunityCommentList.view";
import useCommunityCommentList from "./hooks/useCommunityCommentList";

const CommunityCommentList = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { isLoading, isError, comments, refetch } = useCommunityCommentList({
    communityId: Number(communityId),
  });

  if (isLoading ) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header
        title="댓글"
        right={<CloseIcon />}
        onClickRight={() => navigation(-1)}
      />
      <CommunityCommentListView
        comments={comments}
        onSubmitComment={(comment: string) => {
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: 0 }
          ).then(() => refetch());
        }}
        onSubmitUpdateComment={(commentId: number, comment: string) => {
          updateComment({ commentId }, { content: comment }).then(() =>
            refetch()
          );
        }}
        onClickDeleteComment={(commentId: number) => {
          deleteComment({ commentId }).then(() => refetch());
        }}
        onClickReport={(commentId: number, value: ReasonType) => {
          postReport({
            postId: commentId,
            reportTargetType: "COMMENT",
            reportReasonType: value,
          });
        }}
        onSubmitReply={(commentId: number, comment: string) => {
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: commentId }
          ).then(() => refetch());
        }}
      />
    </>
  );
};

export default CommunityCommentList;
