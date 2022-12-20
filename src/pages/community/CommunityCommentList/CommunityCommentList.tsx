import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../../assets/icon";
import { deleteComment, postComment } from "../../../common/apis/comment";
import useCommentListQuery from "../../../common/queries/comment/useCommentListQuery";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import CommunityCommentListView from "./CommunityCommentList.view";

const CommunityCommentList = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const [optionStatus, setOptionStatus] =
    useState<{
      commentId: number;
      canEdit: boolean;
    } | null>(null);

  const { isLoading, isError, commentList } = useCommentListQuery({
    postId: Number(communityId),
  });

  const navigation = useNavigate();

  if (isLoading || !commentList) {
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
        comments={commentList!}
        optionStatus={optionStatus}
        onSubmitComment={(comment: string, parentId?: number) => {
          postComment(
            { postId: Number(communityId) },
            { content: comment, parentId: parentId ?? Number(communityId) }
          );
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
