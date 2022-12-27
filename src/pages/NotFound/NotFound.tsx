import { useNavigate } from "react-router-dom";
import BuildPaths from "../../common/paths";
import EmptyPage from "../../components/EmptyPage";
import RoundButton from "../../components/RoundButton";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigation = useNavigate();

  return (
    <EmptyPage title="요청하신 페이지를 찾을 수 없습니다." type="full">
      <RoundButton
        className={styles.button}
        onClick={() => navigation(BuildPaths.entry())}
      >
        홈으로
      </RoundButton>
    </EmptyPage>
  );
};

export default NotFound;
