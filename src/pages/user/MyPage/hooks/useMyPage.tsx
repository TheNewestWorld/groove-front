import useLikedPostListQuery from "../../../../common/queries/myPost/useLikedPostListQuery";
import useWrittenPostListQuery from "../../../../common/queries/myPost/useWrittenPostListQuery";
import useUserInfoQuery from "../../../../common/queries/users/useUserInfoQuery";

const useMyPage = () => {
  const {
    isLoading: isLoadingWrittenPost,
    isError: isErrorWrittenPost,
    writtenList,
  } = useWrittenPostListQuery({});

  const {
    isLoading: isLoadingLikedPost,
    isError: isErrorLikedPost,
    likedList,
  } = useLikedPostListQuery({});

  const {
    isLoading: isLoadingUserInfo,
    isError: isErrorUserInfo,
    data: userInfo,
  } = useUserInfoQuery();

  return {
    isLoading: isLoadingWrittenPost || isLoadingLikedPost || isLoadingUserInfo,
    isError: isErrorWrittenPost || isErrorLikedPost || isErrorUserInfo,
    profileImage: userInfo?.profileUrl ?? "",
    nickname: "", // TODO
    recordList: [], // TODO
    likedList:
      likedList?.map(
        ({
          postId,
          userNickname,
          userProfileUri,
          title,
          content,
          likeCount,
          commentCount,
        }) => {
          return {
            id: postId,
            user: userNickname,
            userImageSrc: userProfileUri,
            title,
            description: content,
            likeCount,
            commentCount,
            liked: true, // TODO
          };
        }
      ) ?? [],
    writtenList:
      writtenList?.map(
        ({
          postId,
          userNickname,
          userProfileUri,
          title,
          content,
          likeCount,
          commentCount,
        }) => {
          return {
            id: postId,
            user: userNickname,
            userImageSrc: userProfileUri,
            title,
            description: content,
            likeCount,
            commentCount,
            liked: true, // TODO
          };
        }
      ) ?? [],
  };
};

export default useMyPage;
