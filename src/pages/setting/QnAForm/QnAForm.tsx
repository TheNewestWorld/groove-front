import { useNavigate } from "react-router-dom";
import { postQna } from "../../../common/apis/qna/postQna";
import BuildPaths from "../../../common/paths";
import QnAFormView, { QnAContents } from "./QnAForm.view";

const QnAForm = () => {
  const navigation = useNavigate();

  const onSubmitQnA = (form: QnAContents) => {
    postQna(form)
      .then(() => {
        navigation(BuildPaths.qnaList())
      })
      .catch((error) => {
        alert(error.message);
      })
  };

  return (
    <QnAFormView
      onSubmit={onSubmitQnA}
      goToBack={() => navigation(-1)}
    />
  );
};

export default QnAForm;
