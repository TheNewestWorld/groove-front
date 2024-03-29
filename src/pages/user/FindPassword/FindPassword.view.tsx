import { useState } from "react";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import styles from "./FindPassword.module.scss";

export interface Props {
  isSubmitted: boolean;
  onSubmit: (email: string) => void;
  goToEtry: () => void;
}

const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const FindPasswordView = ({ isSubmitted, onSubmit, goToEtry }: Props) => {
  const [email, setEmail] = useState<string>("");
  const isDisabled = email.length === 0 || !emailRegex.test(email);

  return (
    <>
      {isSubmitted ? (
        <Form
          title="인증코드 발송을 완료했어요."
          subTitle={`입력하신 이메일로 인증코드가 발송됐어요.\n확인 후 아래 인증완료 버튼을 눌러주세요.`}
          buttonText="처음 화면으로"
          buttonColorTheme="dark"
          onClick={goToEtry}
        />
      ) : (
        <Form
          title="이메일로 인증하기"
          subTitle={`인증코드 발송을 위해 회원가입시\n사용한 이메일 주소를 입력해주세요.`}
          buttonText="인증코드 요청하기"
          buttonColorTheme="dark"
          onClick={() => onSubmit(email)}
          isDisabledButton={isDisabled}
        >
          <div className={styles.inputGroup}>
            <Input
              label="아이디(이메일)"
              placeholder="groove@groove.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </Form>
      )}
    </>
  );
};

export default FindPasswordView;
