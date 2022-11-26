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
    likedList,
    writtenList,
  };
};

export default useMyPage;
