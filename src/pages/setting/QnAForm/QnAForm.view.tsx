import { useState } from "react";
import { ArrowIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import RoundButton from "../../../components/RoundButton";
import Input from "../../../components/Input";
import styles from "./QnAForm.module.scss";

export interface Props {
  onSubmit: (title: string, content: string) => void;
  goToBack: () => void;
}

const QnAFormView = ({ onSubmit, goToBack }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <>
      <Header
        title="문의하기"
        left={<ArrowIcon />}
        onClickLeft={goToBack}
      />
      <div className={styles.container}>
        <Input
          label="제목"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.label}>내용</div>
        <textarea
          className={styles.textarea}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요."
        />
        <RoundButton
          colorTheme="dark"
          // TODO: userId 이용해서 title,ccontent 넘기기
          onClick={() => alert("title: " + title + "\ncontent: " + content)}
          disabled={title.length === 0 || content.length === 0}
        >
          등록하기
        </RoundButton>
      </div>
    </>
  );
};

export default QnAFormView;
