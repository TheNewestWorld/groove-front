import { format } from "date-fns";
import useQnAListQuery from "../../../../common/queries/qna/useQnAListQuery";

const useQnA = () => {
  const { isLoading, isError, qnaList } = useQnAListQuery({});

  return {
    isLoading,
    isError,
    settingList:
      qnaList?.map(
        ({
          id,
          title,
          content,
          createdAt,
          hasAnswer
        }) => {
          return {
            id,
            title,
            content,
            description: format(new Date(createdAt), "yy. M. d"),
            hasAnswer
          };
        },
      ) ?? [],
  };
};

export default useQnA;
