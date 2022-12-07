import { useNavigate } from "react-router-dom";
import RoutePath from "../../../constants/routePath";
import QnAFormView from "./QnAForm.view";

const QnAForm = () => {
  const navigation = useNavigate();

  const onSubmit = (title: string, content: string) => {
    alert(title + "\n" + content);
  };

  return (
    <QnAFormView
      onSubmit={onSubmit}
      goToBack={() => navigation(RoutePath.setting)}
    />
  );
};

export default QnAForm;
