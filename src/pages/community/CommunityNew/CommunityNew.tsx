import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import { postPost } from "../../../common/apis/post";
import useCategoryListQuery from "../../../common/queries/category/useCategoryListQuery";
import Header from "../../../components/Header";
import CommunityFormView from "../CommunityForm/CommunityForm.view";

const CommunityNew = () => {
  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const [data, setData] = useState<{
    title: string;
    content: string;
    category: string;
    categoryId: number;
    imageFiles: File[];
    audioFile: File | null;
  }>({
    title: "",
    content: "",
    category: "",
    categoryId: 0,
    imageFiles: [],
    audioFile: null,
  });

  const isDisabled =
    data.title.length === 0 ||
    data.content.length === 0 ||
    data.categoryId === 0;

  const navigation = useNavigate();

  return (
    <>
      <Header
        title="게시물 작성하기"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <CommunityFormView
        categoryList={categoryList!.map((category) => category.name)}
        isDisabledButton={isDisabled}
        data={data}
        selectedCategory={data.category}
        onClickCamera={(image: File) => {
          setData({
            ...data,
            imageFiles: [...data.imageFiles, image],
          });
        }}
        onClickMic={(audio: File) => {
          setData({
            ...data,
            audioFile: audio,
          });
        }}
        onDeleteAudio={() => {
          setData({
            ...data,
            audioFile: null,
          });
        }}
        onDeleteImage={(idx: number) => {
          setData({
            ...data,
            imageFiles: [
              ...data.imageFiles.slice(0, idx),
              ...data.imageFiles.slice(idx + 1),
            ],
          });
        }}
        onClickCreate={() => {
          postPost({
            title: data.title,
            content: data.content,
            categoryId: data.categoryId,
            attachments: data.imageFiles.concat(data.audioFile!),
          });
          navigation(-1);
        }}
        onChangeCategory={(categoryName: string) => {
          setData({
            ...data,
            category: categoryName,
            categoryId: categoryList!.filter(
              (category) => category.name === categoryName
            )[0].id,
          });
        }}
        onChange={(e) => {
          setData({
            ...data,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </>
  );
};

export default CommunityNew;
