import useLikedPostListQuery from "../../../../common/queries/myPost/useLikedPostListQuery";
import useWrittenPostListQuery from "../../../../common/queries/myPost/useWrittenPostListQuery";
import useRecordListQuery from "../../../../common/queries/records/useRecordListQuery";
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
    isLoading: isLoadingRecordList,
    isError: isErrorRecordList,
    recordList,
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
    profileImage: userInfo?.profileUrl ?? "",
    nickname: userInfo?.nickname ?? "",
    recordList:
      recordList?.map(({ fileUrl, recordName, createdAt }, index) => {
        return {
          id: index, // TODO
          title: recordName,
          date: new Date(createdAt),
          length: "", // TODO
          url: fileUrl,
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
  };
};

export default useMyPage;
