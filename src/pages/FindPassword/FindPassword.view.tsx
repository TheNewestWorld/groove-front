import Form from "../../components/Form";
import Input from "../../components/Input";

export interface Props {
  isSended: boolean;
}

const FindPasswordView = ({ isSended }: Props) => {
  return (
    <>
      {isSended ? (
        <Form
          title="인증코드 발송을 완료했어요."
          subTitle={`입력하신 이메일로 인증코드가 발송됐어요.\n확인 후 아래 인증완료 버튼을 눌러주세요.`}
          buttonText="이메일 인증완료"
          buttonColorTheme="dark"
        />
      ) : (
        <Form
          title="이메일로 인증하기"
          subTitle={`인증코드 발송을 위해 회원가입시\n사용한 이메일 주소를 입력해주세요.`}
          buttonText="인증코드 요청하기"
          buttonColorTheme="dark"
        >
          <Input label="아이디(이메일)" placeholder="groove@groove.com" />
        </Form>
      )}
    </>
  );
};

export default FindPasswordView;
