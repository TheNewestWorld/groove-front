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

  return { isLoading, isError, post:data};
};

export default usePostDetailQuery;
