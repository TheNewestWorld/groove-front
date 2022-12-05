import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteComment,
  postComment,
  updateComment,
} from "../../../common/apis/comment";
import useCommentListQuery from "../../../common/queries/comment/useCommentListQuery";
import CommunityCommentListView from "./CommunityCommentList.view";

const CommunityCommentList = () => {
  const { postId } = useParams<{ postId: string }>();
  const [optionStatus, setOptionStatus] =
    useState<{
      commentId: number;
      authority: boolean;
    } | null>(null);

  const { isLoading, isError, commentList } = useCommentListQuery({
    postId: Number(postId),
  });

  const navigation = useNavigate();

  // TODO(in.heo): Synchronize with backend
  const NOT_REPLY = 0;

  if (isLoading || !commentList) {
    return <div>로딩 화면 추가</div>;
  }

  if (isError) {
    return <div>에러 화면 추가</div>;
  }
  return (
    <CommunityCommentListView
      comments={commentList!}
      optionStatus={optionStatus}
      onClose={() => navigation(-1)}
      onSubmitComment={(comment: string, parentId?: number) => {
        postComment(
          { postId: Number(postId) },
          { content: comment, parentId: parentId ?? NOT_REPLY },
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
          authority: hasAuthority,
        });
      }}
      onCloseOption={() => {
        setOptionStatus(null);
      }}
    />
  );
};

export default CommunityCommentList;
