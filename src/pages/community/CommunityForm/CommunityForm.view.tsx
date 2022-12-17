import Header from "../../../components/Header";
import Input from "../../../components/Input";
import RoundButton from "../../../components/RoundButton";
import SelectCategory from "../../../components/SelectCategory";
import { ArrowIcon } from "../../../assets/icon";
import styles from "./CommunityForm.module.scss";
import ContentInput from "./components/ContentInput";

export interface Props {
  categoryList: string[];
  isDisabledButton: boolean;
  data: {
    title: string;
    content: string;
    imageUrls: string[];
    audioUrl: string | null;
  };
  selectedCategory: string;
  onClickCamera: (image: File, url: string) => void;
  onClickMic: (audio: File, url: string) => void;
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
          imageList={data.imageUrls}
          audioUrl={data.audioUrl}
          onChange={onChange}
          onClickCamera={onClickCamera}
          onClickMic={onClickMic}
          onDeleteAudio={onDeleteAudio}
          onDeleteImage={onDeleteImage}
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
