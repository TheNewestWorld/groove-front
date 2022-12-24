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
    qna: data && {
      qnaInfo: {
        title: data.title,
        profileImage: profile,
        nickname: name,
        // TODO: 서버에서 createdAt 내려오게 요청
        // date: new Date(data.createdAt),
        date: new Date(),
        content: data.content,
      },
      answerInfo: data.hasAnswer
        ? {
            answerTitle: data.inquiryAnswer.title,
            answerContent: data.inquiryAnswer.content,
          }
        : undefined,
    },
  };
};

export default useQnADetail;
