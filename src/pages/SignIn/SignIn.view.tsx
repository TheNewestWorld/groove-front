import Form from "../../components/Form";
import Input from "../../components/Input";
import styles from "./SignIn.module.scss";

export interface Props {
  data: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabledButton?: boolean;
  onClickConfirm?: () => void;
}

const SignInView = ({
  data,
  onChange,
  isDisabledButton,
  onClickConfirm,
}: Props) => {
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
          <Input
            name="email"
            value={data.email}
            onChange={onChange}
            label="아이디(이메일)"
            placeholder="groove@groove.com"
          />
          <Input
            name="password"
            value={data.password}
            onChange={onChange}
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
