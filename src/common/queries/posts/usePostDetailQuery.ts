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
  const {
    isLoading,
    isError,
    data: post,
  } = useQuery<GetPostDetailResponse>(
    ["getPostDetail", postId],
    () => getPostDetail({ postId }),
    options,
  );

  return { isLoading, isError, post };
};

export default usePostDetailQuery;
