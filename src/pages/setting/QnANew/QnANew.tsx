import { useNavigate } from "react-router-dom";
import { postQnA } from "../../../common/apis/qna";
import QnAFormView, { QnAForm } from "../QnAForm/QnAForm.view";

const QnANew = () => {
  const navigation = useNavigate();

  const onSubmitQnA = (form: QnAForm) => {
    postQnA(form);
    navigation(-1);
  };

  return <QnAFormView onSubmit={onSubmitQnA} goToBack={() => navigation(-1)} />;
};

export default QnANew;
