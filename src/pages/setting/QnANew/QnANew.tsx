import { useNavigate } from "react-router-dom";
import { postQnA } from "../../../common/apis/qna/postQnA";
import QnANewView, { QnAContents } from "./QnANew.view";

const QnANew = () => {
  const navigation = useNavigate();

  const onSubmitQnA = (form: QnAContents) => {
    postQnA(form);
    navigation(-1);
  };

  return <QnANewView onSubmit={onSubmitQnA} goToBack={() => navigation(-1)} />;
};

export default QnANew;
