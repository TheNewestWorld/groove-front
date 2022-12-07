import { useRef, useState } from "react";
import { ArrowIcon, DeleteIcon, CameraIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import RoundButton from "../../../components/RoundButton";
import Input from "../../../components/Input";
import styles from "./QnAForm.module.scss";
import CircleButton from "../../../components/CircleButton";
import CircleImage from "../../../components/CircleImage";

export interface Props {
  onSubmit: (title: string, content: string) => void;
  goToBack: () => void;
  insertPhoto?: (image: File) => void;
  onChangePhoto?: (image: File) => void;
}

const QnAFormView = ({
  onSubmit,
  goToBack,
  onChangePhoto,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const imageInput = useRef<HTMLInputElement>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

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
        <input
          className={styles.hidden}
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              const reader = new FileReader();
              const file = e.target.files[0];
              reader.onloadend = () => {
                const imagePreviewUrl = reader.result?.toString();
                imagePreviewUrl && setImagePreviewUrl(imagePreviewUrl);
              };
              reader.readAsDataURL(file);
              onChangePhoto && onChangePhoto(file);
            }
          }}
          ref={imageInput}
        />
        <CircleButton
          colorTheme="light"
          icon={<CameraIcon onClick={() => imageInput.current?.click()} />}
          shadow
          className={styles.photoButton}
        />
        {imagePreviewUrl &&
          <>
            <CircleImage
              src={imagePreviewUrl}
              className={styles.photo} />
            <CircleButton
              colorTheme="light"
              icon={<DeleteIcon onClick={() => { setImagePreviewUrl("") }} />}
              shadow
              className={styles.deleteIcon}
            />
          </>
        }
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
