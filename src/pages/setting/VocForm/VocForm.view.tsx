import { useState } from "react";
import { ArrowIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import RoundButton from "../../../components/RoundButton";
import styles from "./VocForm.module.scss";

export interface Props {
  onSubmit: (content: string) => void;
  goToBack: () => void;
}

const VocFormView = ({ onSubmit, goToBack }: Props) => {
  const [content, setContent] = useState<string>("");

  return (
    <>
      <Header
        title="칭찬/불만/제안하기"
        left={<ArrowIcon />}
        onClickLeft={goToBack}
      />
      <div className={styles.container}>
        <textarea
          className={styles.textarea}
          onChange={(e) => setContent(e.target.value)}
          placeholder="이용하시면서 불편했던 점, 칭찬할 만한 점 또는 제안하실 아이디어가 있다면 모두 들려주세요!"
        />
        <RoundButton
          onClick={() => onSubmit(content)}
          disabled={content.length === 0}
        >
          제출하기
        </RoundButton>
      </div>
    </>
  );
};

export default VocFormView;
