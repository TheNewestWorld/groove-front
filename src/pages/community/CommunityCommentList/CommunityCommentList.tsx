import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../../assets/icon";
import { deleteComment, postComment } from "../../../common/apis/comment";
import Error from "../../../components/Error";
import { postReport } from "../../../common/apis/reports";
import Header from "../../../components/Header";
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
        onSubmitComment={(comment: string, parentId?: number) => {
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: parentId ?? 0 }
          ).then(() => refetch());
        }}
        onClickUpdateComment={(commentId: number) => {
          // TODO(in.heo): 수정 쿼리
          // 수정하기, 답글 달기 내용 구분짓게
          // updateComment({commentId}, )
        }}
        onClickDeleteComment={(commentId: number) => {
          deleteComment({ commentId });
        }}
        onClickReport={(commentId: number, value: ReasonType) => {
          postReport({
            postId: commentId,
            reportTargetType: "COMMENT",
            reportReasonType: value,
          });
        }}
        onClickReply={(commentId: number) => {
          // TODO(in.heo) 입력 포커싱
        }}
      />
    </>
  );
};

export default CommunityCommentList;
