import { useQuery, UseQueryOptions } from "react-query";
import { getNoticeDetail, NoticeDetailResponse } from "../../apis/notice";

type QueryProps = { noticeId: number };

const useNoticeDetailQuery = (
  { noticeId }: QueryProps,
  options?: UseQueryOptions<NoticeDetailResponse>
) => {
  const result = useQuery<NoticeDetailResponse>(
    ["getNoticeDetail", noticeId],
    () => getNoticeDetail({ noticeId }),
    options
  );

  return { ...result };
};

export default useNoticeDetailQuery;
