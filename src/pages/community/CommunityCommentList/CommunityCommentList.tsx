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
import { useEffect, useState } from "react";

const CommunityCommentList = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const { isLoading, isError, comments, refetch } = useCommunityCommentList({
    communityId: Number(communityId),
  });

  useEffect(() => {
    if (!isUpdating) {
      refetch();
    }
  }, [isUpdating]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isUpdating && <Loading />}
      <Header
        title="댓글"
        right={<CloseIcon />}
        onClickRight={() => navigation(-1)}
      />
      <CommunityCommentListView
        comments={comments}
        onSubmitComment={(comment: string) => {
          setUpdating(true);
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: 0 }
          ).finally(() => setUpdating(false));
        }}
        onSubmitUpdateComment={(commentId: number, comment: string) => {
          setUpdating(true);
          updateComment({ commentId }, { content: comment }).finally(() =>
            setUpdating(false)
          );
        }}
        onClickDeleteComment={(commentId: number) => {
          setUpdating(true);
          deleteComment({ commentId }).finally(() => setUpdating(false));
        }}
        onClickReport={(commentId: number, value: ReasonType) => {
          setUpdating(true);
          postReport({
            postId: commentId,
            reportTargetType: "COMMENT",
            reportReasonType: value,
          }).finally(() => setUpdating(false));
        }}
        onSubmitReply={(commentId: number, comment: string) => {
          setUpdating(true);
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: commentId }
          ).finally(() => setUpdating(false));
        }}
      />
    </>
  );
};

export default CommunityCommentList;
