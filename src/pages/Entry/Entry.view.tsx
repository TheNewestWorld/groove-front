import RoundButton from "../../components/RoundButton";
import styles from "./Entry.module.scss";

export interface Props {
  goToSignIn: () => void;
  goToSignUp: () => void;
}

const InitialPageView = ({ goToSignIn, goToSignUp }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        {/* TODO: LOGO */}
        로고
      </span>
      <RoundButton
        className={styles.sighInButton}
        colorTheme="dark"
        onClick={goToSignIn}
      >
        시작하기
      </RoundButton>
      <div className={styles.textGroup}>
        <span className={styles.text}>아직 계정이 없으신가요?</span>
        <button className={styles.signUpButton} onClick={goToSignUp}>
          이메일로 가입하기
        </button>
      </div>
    </div>
  );
};

export default InitialPageView;
