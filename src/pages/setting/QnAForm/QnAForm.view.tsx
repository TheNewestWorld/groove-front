import { useRef, useState } from "react";
import { ArrowIcon, CameraIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import RoundButton from "../../../components/RoundButton";
import Input from "../../../components/Input";
import styles from "./QnAForm.module.scss";
import CircleButton from "../../../components/CircleButton";
import ImageList from "../../../components/ImageList";

export type QnAContents = {
  title: string;
  content: string;
  image: File | null;
};

export interface Props {
  onSubmit: (form: QnAContents) => void;
  goToBack: () => void;
  imageList?: { src: string; id: number }[];
}

const QnAFormView = ({ onSubmit, goToBack, imageList = [] }: Props) => {
  const attachImage = useRef<HTMLInputElement>(null);
  const [attachImageUrl, setAttachImageUrl] = useState<string | null>(null);
  const [form, setForm] = useState<QnAContents>({
    title: "",
    content: "",
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
                const attachImageUrl = reader.result?.toString();
                attachImageUrl && setAttachImageUrl(attachImageUrl);
                attachImageUrl &&
                  (imageList[0] = { src: attachImageUrl, id: 0 });
              };
              reader.readAsDataURL(file);
              e.target.value = "";
              form.image = file;
              setForm(form);
            }
          }}
          ref={attachImage}
        />
        <CircleButton
          colorTheme="light"
          icon={<CameraIcon onClick={() => attachImage.current?.click()} />}
          shadow
          className={styles.photoButton}
        />
        {attachImageUrl && (
          <ImageList
            className={styles.photo}
            maxCount={1}
            imageList={imageList}
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
