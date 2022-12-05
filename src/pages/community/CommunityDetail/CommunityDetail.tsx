import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../../../common/apis/post";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import CommunityDetailView from "./CommunityDetail.view";

const CommunityDetail = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const [isOpenOption, openOption] = useState<boolean>(false);

  const { isLoading, isError, post } = usePostDetailQuery(
    {
      postId: Number(communityId),
    },
    {
      enabled: !!communityId,
    }
  );

  const navigation = useNavigate();

  if (isLoading || !post) {
    return <div>로딩 화면 추가</div>;
  }

  if (isError || !communityId) {
    return <div>에러 화면 추가</div>;
  }

  return (
    <>
      {
        <CommunityDetailView
          title={post.title}
          profileImage={post.profileUri}
          nickname={post.nickname}
          date={new Date(post.createdAt)}
          onClickProfile={() => {}}
          content={post.content}
          imageList={post.attachmentUris.filter(
            (file) => file.type === "IMAGE"
          )}
          audio={
            post.attachmentUris.filter((file) => file.type === "RECORD")[0]
          }
          likeCount={post.likeCount}
          liked={post.likeFlag}
          commentCount={post.commentCount}
          hasAuthority={post.authority}
          onClickBack={() => {
            navigation(-1);
          }}
          onClickOption={() => {
            openOption(true);
          }}
          isOpenOption={isOpenOption}
          onCloseOption={() => {
            openOption(false);
          }}
          onClickModify={() => {}}
          onClickDelete={() => {
            deletePost({ postId: Number(communityId) });
            navigation(-1);
          }}
          onClickReport={() => {}}
        />
      }
    </>
  );
};

export default CommunityDetail;
