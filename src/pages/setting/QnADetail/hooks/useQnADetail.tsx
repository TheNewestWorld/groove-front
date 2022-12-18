import useQnADetailQuery from "../../../../common/queries/qna/useQnADetailQuery";
import { useUserState } from "../../../../hooks";

type Props = {
  qnaId: number;
};

const useQnADetail = ({ qnaId }: Props) => {
  const { isLoading, isError, data } = useQnADetailQuery({ qnaId });
  const { name, profile } = useUserState();

  return {
    isLoading,
    isError,
    // TODO: 서버와 인터페이스 Adaptation이 필요할 수 있습니다.
    qna: data && {
      qnaInfo: {
        title: data.title,
        profileImage: profile,
        nickname: name,
        date: new Date(data.createdAt),
        content: data.content,
      },
      answerInfo: data.hasAnswer
        ? {
            answerTitle: data.answerTitle,
            answerContent: data.answerContent,
          }
        : undefined,
    },
  };
};

export default useQnADetail;
