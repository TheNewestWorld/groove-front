import styles from "./ContentInput.module.scss";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  children?: React.ReactNode;
}

const ContentInput = ({ value, onChange, children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>내용</div>
      {/* TODO: 내용 박스 사이즈 유동적인지 테스트 후 수정 */}
      <div className={styles.input}>
        <textarea
          value={value}
          name="content"
          onChange={onChange}
          placeholder="내용을 입력해주세요."
        />
        {children}
      </div>
    </div>
  );
};

export default ContentInput;
