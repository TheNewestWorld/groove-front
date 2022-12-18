import { useState } from "react";
import Input from "../../../components/Input";
import RoundButton from "../../../components/RoundButton";
import SelectCategory from "../../../components/SelectCategory";
import ContentInput from "./components/ContentInput";
import styles from "./CommunityForm.module.scss";
import FileInput from "./components/FileInput";

type FormType = {
  title: string;
  content: string;
  category: string;
  categoryId: number;
  imageFiles: File[];
  audioFile: File | null;
};

export interface Props {
  categoryList: { id: number; name: string }[];
  data?: FormType;
  onSubmit: (form: FormType) => void;
}

const CommunityFormView = ({ categoryList, data, onSubmit }: Props) => {
  const [community, setCommunity] = useState<FormType>(
    data ?? {
      title: "",
      content: "",
      category: "",
      categoryId: 0,
      imageFiles: [],
      audioFile: null,
    }
  );

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const isDisabled =
    community.title.length === 0 ||
    community.content.length === 0 ||
    community.categoryId === 0;

  return (
    <>
      <div className={styles.body}>
        <div className={styles.label}>카테고리</div>
        <SelectCategory
          className={styles.category}
          title="카테고리"
          placeholder="카테고리를 선택해주세요."
          categoryList={categoryList.map(({ name }) => name)}
          onClickCategory={(categoryName: string) => {
            setCommunity({
              ...community,
              category: categoryName,
              categoryId: categoryList!.filter(
                (category) => category.name === categoryName
              )[0].id,
            });
          }}
          activeCategory={community.category}
        />
        <Input
          label="제목"
          name="title"
          value={community.title}
          placeholder="제목을 입력해주세요."
          onChange={(e) => {
            setCommunity({
              ...community,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <ContentInput
          value={community.content}
          onChange={(e) => {
            setCommunity({
              ...community,
              [e.target.name]: e.target.value,
            });
          }}
        >
          <FileInput
            imageList={imageUrls}
            audioUrl={audioUrl}
            onClickCamera={(image: File, url: string) => {
              setCommunity({
                ...community,
                imageFiles: [...community.imageFiles, image],
              });
              setImageUrls([...imageUrls, url]);
            }}
            onClickMic={(audio: File, url: string) => {
              setCommunity({
                ...community,
                audioFile: audio,
              });
              setAudioUrl(url);
            }}
            onDeleteAudio={() => {
              setCommunity({
                ...community,
                audioFile: null,
              });
            }}
            onDeleteImage={(idx: number) => {
              setCommunity({
                ...community,
                imageFiles: [
                  ...community.imageFiles.slice(0, idx),
                  ...community.imageFiles.slice(idx + 1),
                ],
              });
              setImageUrls(imageUrls.filter((_, index) => index !== idx));
            }}
          />
        </ContentInput>

        <RoundButton
          className={styles.button}
          onClick={() => onSubmit(community)}
          disabled={isDisabled}
          colorTheme="dark"
        >
          {data ? "수정하기" : "등록하기"}
        </RoundButton>
      </div>
    </>
  );
};

export default CommunityFormView;
