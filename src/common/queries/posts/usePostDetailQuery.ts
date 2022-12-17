import { useQuery, UseQueryOptions } from "react-query";
import { getPostDetail } from "../../apis/post";
import { GetPostDetailResponse } from "../../apis/post/type";

type QueryProps = {
  postId: number;
};

const usePostDetailQuery = (
  { postId }: QueryProps,
  options?: UseQueryOptions<GetPostDetailResponse>,
) => {
  const { isLoading, isError, data } = useQuery<GetPostDetailResponse>(
    ["getPostDetail", postId],
    () => getPostDetail({ postId }),
    options,
  );

  return {
    isLoading,
    isError,
    post: {
      ...data,
      imageList: data?.attachments
        .filter(file => file.fileType === "POST_IMAGE")
        .map(file => {
          return {
            id: file.id,
            src: file.uri,
            type: file.fileType,
          };
        }),
      audio: data?.attachments
        .filter(file => file.fileType === "POST_RECORD")
        .map(file => {
          return {
            id: file.id,
            src: file.uri,
            title: file.fileName,
          };
        })[0],
      attachments: [],
    },
  };
};

export default usePostDetailQuery;
