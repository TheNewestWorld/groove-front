import useLikedPostListQuery from "../../../../common/queries/myPost/useLikedPostListQuery";
import useWrittenPostListQuery from "../../../../common/queries/myPost/useWrittenPostListQuery";
import useRecordListQuery from "../../../../common/queries/records/useRecordListQuery";
import useUserInfoQuery from "../../../../common/queries/users/useUserInfoQuery";

const useMyPage = () => {
  const {
    isLoading: isLoadingWrittenPost,
    isError: isErrorWrittenPost,
    writtenList,
    hasNextPage: hasNextWrittenPage,
    fetchNextPage: fetchNextWrittenPage,
    isFetchingNextPage: isFetchingNextWrittenPage,
  } = useWrittenPostListQuery({});

  const {
    isLoading: isLoadingLikedPost,
    isError: isErrorLikedPost,
    likedList,
    hasNextPage: hasNextLikedPage,
    fetchNextPage: fetchNextLikedPage,
    isFetchingNextPage: isFetchingNextLikedPage,
  } = useLikedPostListQuery({});

  const {
    isLoading: isLoadingRecordList,
    isError: isErrorRecordList,
    recordList,
    hasNextPage: hasNextRecordPage,
    fetchNextPage: fetchNextRecordPage,
    isFetchingNextPage: isFetchingNextRecordPage,
  } = useRecordListQuery({});

  const {
    isLoading: isLoadingUserInfo,
    isError: isErrorUserInfo,
    data: userInfo,
  } = useUserInfoQuery();

  return {
    isLoading:
      isLoadingWrittenPost ||
      isLoadingLikedPost ||
      isLoadingRecordList ||
      isLoadingUserInfo,
    isError:
      isErrorWrittenPost ||
      isErrorLikedPost ||
      isErrorRecordList ||
      isErrorUserInfo,
    profileImage: userInfo?.profileUri ?? "",
    nickname: userInfo?.nickname ?? "",
    recordList:
      recordList?.map(({ recordId, fileUri, recordName, createdAt }) => {
        return {
          id: recordId,
          title: recordName,
          date: new Date(createdAt),
          length: "", // TODO
          url: fileUri,
        };
      }) ?? [], // TODO
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
            liked: true,
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
          likeFlag,
        }) => {
          return {
            id: postId,
            user: userNickname,
            userImageSrc: userProfileUri,
            title,
            description: content,
            likeCount,
            commentCount,
            liked: likeFlag as boolean,
          };
        }
      ) ?? [],
    hasNextWrittenPage,
    fetchNextWrittenPage,
    isFetchingNextWrittenPage,
    hasNextLikedPage,
    fetchNextLikedPage,
    isFetchingNextLikedPage,
    hasNextRecordPage,
    fetchNextRecordPage,
    isFetchingNextRecordPage,
  };
};

export default useMyPage;
