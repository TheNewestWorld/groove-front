import classNames from "classnames";
import CircleImage from "../../components/CircleImage";
import Form from "../../components/Form";
import Input from "../../components/Input";
import styles from "./SignUp.module.scss";

export interface Props {
  isDisabledButton?: boolean;
  onClickConfirm?: () => void;
  isSubmitted: boolean;
}

const SignUpView = ({
  isDisabledButton,
  onClickConfirm,
  isSubmitted,
}: Props) => {
  return (
    <div
      className={classNames([styles.container, isSubmitted && styles.center])}
    >
      {isSubmitted ? (
        <Form
          title="앞으로 잘 부탁해요!"
          subTitle="조금씩 성장하는 당신의 목소리를 응원할게요."
          buttonText="GROOVE 시작하기"
          isDisabledButton={isDisabledButton}
          buttonColorTheme="dark"
          onClick={onClickConfirm}
          align="center"
        >
          {/* TODO: 이미지 무엇인지 확인 */}
          <CircleImage
            className={styles.image}
            src=""
          />
        </Form>
      ) : (
        <Form
          title={`회원가입에 필요한\n정보를 입력해주세요.`}
          buttonText="완료하기"
          isDisabledButton={isDisabledButton}
          buttonColorTheme="dark"
          onClick={onClickConfirm}
        >
          <div className={styles.inputGroup}>
            <Input label="아이디(이메일)" placeholder="groove@groove.com" />
            <Input label="닉네임" placeholder="8자 이내 한글 또는 영문" />
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
      )}
    </div>
  );
};

export default SignUpView;
