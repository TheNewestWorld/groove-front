import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../../assets/icon";
import { deleteComment, postComment } from "../../../common/apis/comment";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import CommunityCommentListView from "./CommunityCommentList.view";
import useCommunityCommentList from "./hooks/useCommunityCommentList";

const CommunityCommentList = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();
  const [optionStatus, setOptionStatus] =
    useState<{
      commentId: number;
      canEdit: boolean;
    } | null>(null);

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
        optionStatus={optionStatus}
        onSubmitComment={(comment: string, parentId?: number) => {
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: parentId ?? 0 }
          ).then(() => refetch());
        }}
        onClickUpdateOption={(commentId: number) => {
          // TODO(in.heo): 수정 쿼리
          // 수정하기, 답글 달기 내용 구분짓게
          // updateComment({commentId}, )
        }}
        onClickDeleteOption={(commentId: number) => {
          deleteComment({ commentId });
        }}
        onClickReportOption={(commentId: number) => {
          // TODO(in.heo): 신고 기능 쿼리
        }}
        onClickReply={(commentId: number) => {
          // TODO(in.heo) 입력 포커싱
        }}
        onClickOption={(commentId: number, hasAuthority: boolean) => {
          setOptionStatus({
            commentId,
            canEdit: hasAuthority,
          });
        }}
        onCloseOption={() => {
          setOptionStatus(null);
        }}
      />
    </>
  );
};

export default CommunityCommentList;
