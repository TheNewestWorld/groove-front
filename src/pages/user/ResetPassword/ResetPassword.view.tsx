import Form from "../../../components/Form";
import Input from "../../../components/Input";
import styles from "./ResetPassword.module.scss";

export interface Props {}

const ResetPasswordView = () => {
  return (
    <Form
      title="비밀번호 재설정하기"
      subTitle="새로운 비밀번호를 입력해주세요."
      buttonText="완료하기"
      buttonColorTheme="dark"
    >
      <div className={styles.inputGroup}>
        <Input
          label="비밀번호"
          placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
        />
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </div>
    </Form>
  );
};

export default ResetPasswordView;
