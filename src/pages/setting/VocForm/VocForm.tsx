import { useNavigate } from "react-router-dom";
import { postVoC } from "../../../common/apis/voc";
import RoutePath from "../../../constants/routePath";
import VocFormView from "./VocForm.view";

const VocForm = () => {
  const navigation = useNavigate();

  const onSubmit = (content: string) => {
    postVoC({ content });
    navigation(-1);
  };

  return (
    <VocFormView
      onSubmit={onSubmit}
      goToBack={() => navigation(RoutePath.setting)}
    />
  );
};

export default VocForm;
