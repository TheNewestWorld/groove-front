import { useQuery, UseQueryOptions } from "react-query";
import { getQnADetail, QnADetailResponse } from "../../apis/qna";

type QueryProps = { qnaId: number };

const useQnADetailQuery = (
  { qnaId }: QueryProps,
  options?: UseQueryOptions<QnADetailResponse>,
) => {
  const result = useQuery<QnADetailResponse>(
    ["getQnADetail", qnaId],
    () => getQnADetail({ qnaId }),
    options,
  );

  return { ...result };
};

export default useQnADetailQuery;
