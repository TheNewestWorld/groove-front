import { useNavigate } from "react-router-dom";
import BuildPaths from "../../common/paths";
import EntryView from "./Entry.view";

const Entry = () => {
  const navigation = useNavigate();

  const goToSignIn = () => navigation(BuildPaths.signIn());

  const goToSignUp = () => navigation(BuildPaths.signUp());

  return <EntryView goToSignIn={goToSignIn} goToSignUp={goToSignUp} />;
};

export default Entry;
