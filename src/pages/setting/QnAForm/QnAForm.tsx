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

  const imageList: { src: string; id: number; }[] | undefined = [];

  return (
    <QnAFormView
      onSubmit={onSubmitQnA}
      goToBack={() => navigation(-1)}
      imageList={imageList}
    />
  );
};

export default QnAForm;
