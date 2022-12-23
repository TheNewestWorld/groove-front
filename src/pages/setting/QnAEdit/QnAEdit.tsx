import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateQnA } from "../../../common/apis/qna";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import QnAFormView, { QnAForm } from "../QnAForm/QnAForm.view";
import useQnAEdit from "./hooks/useQnAEdit";

const QnAEdit = () => {
  const navigation = useNavigate();
  const { qnaId } = useParams<{ qnaId: string }>();
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const { isLoading, isError, qna } = useQnAEdit({ qnaId: Number(qnaId) });

  if (isLoading || !qna) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const onSubmitQnA = (form: QnAForm) => {
    updateQnA({ qnaId: Number(qnaId) }, form);
    // navigation(-1);
  };

  return (
    <QnAFormView
      title={qna.title}
      content={qna.content}
      image={null}
      onSubmit={onSubmitQnA}
      goToBack={() => navigation(-1)}
    />
  );
};

export default QnAEdit;
