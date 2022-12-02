import useLikedPostListQuery from "../../../../common/queries/myPost/useLikedPostListQuery";
import useWrittenPostListQuery from "../../../../common/queries/myPost/useWrittenPostListQuery";

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

  return {
    isLoading: isLoadingWrittenPost || isLoadingLikedPost,
    isError: isErrorWrittenPost || isErrorLikedPost,
    profileImage: "", // TODO
    nickname: "", // TODO
    recordList: [], // TODO
    likedList,
    writtenList,
  };
};

export default useMyPage;
