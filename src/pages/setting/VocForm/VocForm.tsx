import { useNavigate } from "react-router-dom";
import RoutePath from "../../../constants/routePath";
import VocFormView from "./VocForm.view";

const VocForm = () => {
  const navigation = useNavigate();

  const onSubmit = (content: string) => {
    // TODO
  };

  return (
    <VocFormView
      onSubmit={onSubmit}
      goToBack={() => navigation(RoutePath.setting)}
    />
  );
};

export default VocForm;
