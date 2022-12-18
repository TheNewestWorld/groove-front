import { format } from "date-fns";
import useQnAListQuery from "../../../../common/queries/qna/useQnAListQuery";

const useQnA = () => {
  const { isLoading, isError, qnaList } = useQnAListQuery({});

  return {
    isLoading,
    isError,
    settingList:
      // TODO: 서버와 인터페이스 Adaptation이 필요할 수 있습니다.
      qnaList?.map(
        ({
          id,
          title,
          content,
          createdAt,
          hasAnswer,
          answerTitle,
          answerContent,
        }) => {
          return {
            id,
            title,
            content,
            description: format(new Date(createdAt), "yy. M. d"),
            hasAnswer,
            answerTitle,
            answerContent,
          };
        },
      ) ?? [],
  };
};

export default useQnA;
