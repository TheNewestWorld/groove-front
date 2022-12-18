import { useQuery, UseQueryOptions } from "react-query";
import { getPostDetail } from "../../apis/post";
import { GetPostDetailResponse } from "../../apis/post/type";

type QueryProps = {
  postId: number;
};

const usePostDetailQuery = (
  { postId }: QueryProps,
  options?: UseQueryOptions<GetPostDetailResponse>
) => {
  const { isLoading, isError, data, ...other } =
    useQuery<GetPostDetailResponse>(
      ["getPostDetail", postId],
      () => getPostDetail({ postId }),
      options
    );

  return {
    isLoading,
    isError,
    post: {
      ...data,
      imageList: data?.attachments
        .filter(({ fileType }) => fileType === "POST_IMAGE")
        .map(({ id, uri, fileType }) => {
          return {
            id,
            src: uri,
            type: fileType,
          };
        }),
      audio: data?.attachments
        .filter(({ fileType }) => fileType === "POST_RECORD")
        .map(({ id, uri, fileName }) => {
          return {
            id,
            src: uri,
            title: fileName,
          };
        })[0],
    },
    ...other,
  };
};

export default usePostDetailQuery;
