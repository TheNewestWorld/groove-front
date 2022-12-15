import classNames from "classnames";
import { useState } from "react";
import CircleImage from "../../../components/CircleImage";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import styles from "./SignUp.module.scss";

export type SignUpForm = {
  email: string;
  password: string;
  nickname: string;
};

export interface Props {
  isSubmitted: boolean;
  onSubmit: (form: SignUpForm) => void;
  goToEtry: () => void;
}

const SignUpView = ({ isSubmitted, onSubmit, goToEtry }: Props) => {
  const [form, setForm] = useState<SignUpForm>({
    email: "",
    password: "",
    nickname: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const isDisabledButton =
    form.email.length === 0 ||
    form.nickname.length === 0 ||
    form.password.length === 0 ||
    form.password !== confirmPassword;

  return (
    <div
      className={classNames([styles.container, isSubmitted && styles.center])}
    >
      {isSubmitted ? (
        <Form
          title="인증코드 발송을 완료했어요."
          subTitle={`입력하신 이메일로 인증코드가 발송됐어요.\n확인 후 아래 인증완료 버튼을 눌러주세요.`}
          buttonText="처음 화면으로"
          buttonColorTheme="dark"
          onClick={goToEtry}
        >
          {/* TODO: 이미지 무엇인지 확인 */}
          <CircleImage className={styles.image} src="" />
        </Form>
      ) : (
        <Form
          title={`회원가입에 필요한\n정보를 입력해주세요.`}
          buttonText="완료하기"
          isDisabledButton={isDisabledButton}
          buttonColorTheme="dark"
          onClick={() => onSubmit(form)}
        >
          <div className={styles.inputGroup}>
            <Input
              label="아이디(이메일)"
              placeholder="groove@groove.com"
              name="email"
              value={form.email}
              onChange={onChange}
            />
            <Input
              label="닉네임"
              placeholder="8자 이내 한글 또는 영문"
              name="nickname"
              value={form.nickname}
              onChange={onChange}
            />
            <Input
              label="비밀번호"
              placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
              name="password"
              value={form.password}
              type="password"
              onChange={onChange}
            />
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요."
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </Form>
      )}
    </div>
  );
};

export default SignUpView;
