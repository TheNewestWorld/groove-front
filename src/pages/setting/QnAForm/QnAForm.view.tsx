import { useRef, useState } from "react";
import { ArrowIcon, CameraIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import RoundButton from "../../../components/RoundButton";
import Input from "../../../components/Input";
import CircleButton from "../../../components/CircleButton";
import ImageList from "../../../components/ImageList";
import styles from "./QnAForm.module.scss";

export interface QnAForm {
  title: string;
  content: string;
  image: File | null;
}

export interface Props {
  title?: string;
  content?: string;
  image?: File | null;
  onSubmit: (form: QnAForm) => void;
  goToBack: () => void;
}

const QnAFormView = ({ title, content, image, onSubmit, goToBack }: Props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [attachImageUrl, setAttachImageUrl] = useState<string | null>(null);
  const [form, setForm] = useState<QnAForm>({
    title: title ?? "",
    content: content ?? "",
    image: null,
  });

  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Header title="문의하기" left={<ArrowIcon />} onClickLeft={goToBack} />
      <div className={styles.container}>
        <Input
          label="제목"
          placeholder="제목을 입력해주세요."
          name="title"
          value={form.title}
          onChange={onChange}
        />
        <div className={styles.label}>내용</div>
        <textarea
          className={styles.textarea}
          name="content"
          value={form.content}
          onChange={onChange}
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
                setAttachImageUrl(reader.result!.toString());
              };
              reader.readAsDataURL(file);
              e.target.value = "";
              setForm({ ...form, image: file });
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
        {attachImageUrl && (
          <ImageList
            className={styles.photo}
            maxCount={1}
            imageList={attachImageUrl ? [{ src: attachImageUrl, id: 0 }] : []}
            canDelete
            onClickDelete={() => {
              setAttachImageUrl(null);
              setForm({ ...form, image: null });
            }}
          />
        )}
        <RoundButton
          colorTheme="dark"
          onClick={() => onSubmit(form)}
          disabled={form.title.length === 0 || form.content.length === 0}>
          등록하기
        </RoundButton>
      </div>
    </>
  );
};

export default QnAFormView;
