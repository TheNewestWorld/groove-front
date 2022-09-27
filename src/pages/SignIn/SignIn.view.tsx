import Form from "../../components/Form";
import Input from "../../components/Input";
import styles from "./SignIn.module.scss";

export interface Props {
  isDisabledButton?: boolean;
  onClickConfirm?: () => void;
}

const SignInView = ({ isDisabledButton, onClickConfirm }: Props) => {
  return (
    <div className={styles.container}>
      {/* TODO: 헤더 추가하기 */}
      <Form
        title="이메일로 시작하기"
        buttonText="시작하기"
        isDisabledButton={isDisabledButton}
        buttonColorTheme="dark"
        onClick={onClickConfirm}
      >
        <div className={styles.inputGroup}>
          <Input label="아이디(이메일)" placeholder="groove@groove.com" />
          <Input
            label="비밀번호"
            placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
          />
        </div>
        <div className={styles.button}>
          <button>비밀번호가 기억나지 않아요</button>
        </div>
      </Form>
    </div>
  );
};

export default SignInView;
