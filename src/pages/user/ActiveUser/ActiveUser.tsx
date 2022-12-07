import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activeUser } from "../../../common/apis/auth/activeUser";
import BuildPaths from "../../../common/paths";
import Form from "../../../components/Form";
import Character from "./images/welcome_character.png";
import styles from "./ActiveUser.module.scss";

const ActiveUser = () => {
  const [searchParams] = useSearchParams();
  const sessionKey = searchParams.get("sessionKey");
  const navigation = useNavigate();

  console.log(sessionKey);

  useEffect(() => {
    if (!sessionKey) {
      return;
    }

    activeUser({ sessionKey });
  }, []);

  if (!sessionKey) {
    // TODO: 에러 표시
    return <>잘못 접근한 화면입니다.</>;
  }

  return (
    <div className={styles.container}>
      <Form
        title="앞으로 잘 부탁해요!"
        subTitle="조금씩 성장하는 당신의 목소리를 응원할게요."
        buttonText="GROOVE 시작하기"
        buttonColorTheme="dark"
        onClick={() => navigation(BuildPaths.entry())}
        align="center"
      >
        <img className={styles.image} src={Character} alt="" />
      </Form>
    </div>
  );
};

export default ActiveUser;
