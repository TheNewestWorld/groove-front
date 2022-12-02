import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../common/apis/post";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import CommunityDetailView from "./CommunityDetail.view";

const CommunityDetail = () => {
  // TODO(in.heo): path에 따라서 postId 변환 및 path 변환
  const [postId, setPostId] = useState<number>(0);
  const [isOpenOption, openOption] = useState<boolean>(false);
  const [isOpenImage, openImage] = useState<boolean>(false);
  const [imageId, setImageId] = useState<number>(0);

  const { isLoading, isError, post } = usePostDetailQuery({
    postId: postId,
  });

  const navigation = useNavigate();

  if (isLoading || !post) {
    return <div>로딩 화면 추가</div>;
  }

  if (isError) {
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
          imageList={post.attachmentUris.filter(file => file.type === "IMAGE")}
          audio={post.attachmentUris.filter(file => file.type === "RECORD")[0]}
          onClickImage={(id: number) => {
            openImage(true);
            setImageId(id);
          }}
          onClickMore={() => {
            openImage(true);
            // TODO(in.heo): Remove hard-code
            setImageId(4);
          }}
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
          imageId={imageId}
          isOpenImage={isOpenImage}
          onCloseImage={() => {
            openImage(false);
          }}
          onClickModify={() => {
          }}
          onClickDelete={() => {
            deletePost({postId});
            navigation(-1);
          }}
          onClickReport={() => {}}
        />
      }
    </>
  );
};

export default CommunityDetail;
