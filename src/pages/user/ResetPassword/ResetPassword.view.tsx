import { useState } from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import styles from "./ResetPassword.module.scss";

export interface Props {
  onSubmit: (password: string) => void;
}

const ResetPasswordView = ({ onSubmit }: Props) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const checkPassword = () => {
    onSubmit(password);
  };

  return (
    <Form
      title="비밀번호 재설정하기"
      subTitle="새로운 비밀번호를 입력해주세요."
      buttonText="완료하기"
      buttonColorTheme="dark"
      onClick={checkPassword}
      isDisabledButton={password.length === 0 || password !== confirmPassword}
    >
      <div className={styles.inputGroup}>
        <Input
          label="비밀번호"
          placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
    </Form>
  );
};

export default ResetPasswordView;
