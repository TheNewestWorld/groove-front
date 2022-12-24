import useQnADetailQuery from "../../../../common/queries/qna/useQnADetailQuery";

type Props = {
  qnaId: number;
};

const useQnAEdit = ({ qnaId }: Props) => {
  const { isLoading, isError, data } = useQnADetailQuery({ qnaId });

  return {
    isLoading,
    isError,
    qna: data && {
      title: data.title,
      content: data.content,
      attachments: data.attachments,
    },
  };
};

export default useQnAEdit;
