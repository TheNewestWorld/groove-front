import { useState } from "react";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import RoundButton from "../../../components/RoundButton";
import SelectCategory from "../../../components/SelectCategory";
import ContentInput from "./components/ContentInput";
import { ArrowIcon } from "../../../assets/icon";
import styles from "./CommunityForm.module.scss";

export interface Props {
  categoryList: string[];
  isDisabledButton: boolean;
  data: {
    title: string;
    content: string;
  };
  selectedCategory: string;
  onClickCamera: (image: File) => void;
  onClickMic: (audio: File) => void;
  onDeleteAudio: () => void;
  onDeleteImage: (id: number) => void;
  onClickCreate: () => void;
  onClickClose: () => void;
  onChangeCategory: (category: string) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const CommunityFormView = ({
  categoryList,
  isDisabledButton,
  data,
  selectedCategory,
  onClickCamera,
  onClickMic,
  onDeleteAudio,
  onDeleteImage,
  onClickClose,
  onClickCreate,
  onChangeCategory,
  onChange,
}: Props) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <Header
        title="게시물 작성하기"
        left={<ArrowIcon />}
        onClickLeft={onClickClose}
      />

      <div className={styles.body}>
        <div className={styles.label}>카테고리</div>
        <SelectCategory
          className={styles.category}
          title="카테고리"
          placeholder="카테고리를 선택해주세요."
          categoryList={categoryList}
          onClickCategory={onChangeCategory}
          activeCategory={selectedCategory}
        />
        <Input
          label="제목"
          name="title"
          value={data.title}
          placeholder="제목을 입력해주세요."
          onChange={onChange}
        />
        <ContentInput
          value={data.content}
          imageList={imageUrls}
          audioUrl={audioUrl}
          onChange={onChange}
          onClickCamera={(image: File, url: string) => {
            setImageUrls([...imageUrls, url]);
            onClickCamera(image);
          }}
          onClickMic={(audio: File, url: string) => {
            setAudioUrl(url);
            onClickMic(audio);
          }}
          onDeleteAudio={() => {
            setAudioUrl(null);
            onDeleteAudio();
          }}
          onDeleteImage={(idx: number) => {
            setImageUrls([
              ...imageUrls.slice(0, idx),
              ...imageUrls.slice(idx + 1),
            ]);
            onDeleteImage(idx);
          }}
        />

        <RoundButton
          className={styles.button}
          onClick={onClickCreate}
          disabled={isDisabledButton}
          colorTheme="dark">
          등록하기
        </RoundButton>
      </div>
    </div>
  );
};

export default CommunityFormView;
