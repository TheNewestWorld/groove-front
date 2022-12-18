import { useNavigate, useParams } from "react-router-dom";
import { deleteQnA } from "../../../common/apis/qna/deleteQnA";
import BuildPaths from "../../../common/paths";
import useQnADetail from "./hooks/useQnADetail";
import QnADetailView from "./QnADetail.view";

const QnADetail = () => {
  const { qnaId } = useParams<{ qnaId: string }>();

  const { isLoading, isError, qna } = useQnADetail({
    qnaId: Number(qnaId),
  });

  const navigation = useNavigate();

  if (isLoading || !qna) {
    // TODO: 스켈레톤
    return <>LOADING...</>;
  }

  if (isError || !qnaId) {
    // TODO: 에러 처리
    return <>에러 발생</>;
  }

  return (
    <QnADetailView
      onClose={() => navigation(-1)}
      {...qna}
      onDelete={() => {
        deleteQnA({ qnaId: Number(qnaId) });
        navigation(-1);
      }}
      onModify={() => {
        navigation(BuildPaths.qnaEdit(qnaId));
      }}
      onClickReQnA={() => {
        navigation(BuildPaths.qnaNew());
      }}
    />
  );
};

export default QnADetail;
