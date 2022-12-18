import { useNavigate } from "react-router-dom";
import { postQna } from "../../../common/apis/qna/postQna";
import QnANewView, { QnAContents } from "./QnANew.view";

const QnANew = () => {
  const navigation = useNavigate();

  const onSubmitQnA = (form: QnAContents) => {
    postQna(form);
    navigation(-1);
  };

  return <QnANewView onSubmit={onSubmitQnA} goToBack={() => navigation(-1)} />;
};

export default QnANew;
