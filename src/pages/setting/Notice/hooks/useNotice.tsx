import { format } from "date-fns";
import useNoticeListQuery from "../../../../common/queries/notices/useNoticeListQuery";

const useNotice = () => {
  const { isLoading, isError, noticeList } = useNoticeListQuery({});

  return {
    isLoading,
    isError,
    settingList:
      noticeList?.map(({ id, title, content, createdAt }) => {
        return {
          id,
          title,
          content,
          description: format(new Date(createdAt), "yy. M. d"),
        };
      }) ?? [],
  };
};

export default useNotice;
