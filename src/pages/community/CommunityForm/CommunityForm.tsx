import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPost } from "../../../common/apis/post";
import useCategoryListQuery from "../../../common/queries/category/useCategoryListQuery";
import CommunityFormView from "./CommunityForm.view";

const CommunityForm = () => {
  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const [data, setData] = useState<{
    title: string;
    content: string;
    category: string;
    categoryId: number;
    imageFiles: File[];
    imageUrls: string[];
    audioFile: File | null;
    audioUrl: string | null;
  }>({
    title: "",
    content: "",
    category: "",
    categoryId: 0,
    imageFiles: [],
    imageUrls: [],
    audioFile: null,
    audioUrl: null,
  });

  const isDisabled = (): boolean => {
    return (
      data.title.length === 0 ||
      data.content.length === 0 ||
      data.categoryId === 0
    );
  };

  const navigation = useNavigate();

  return (
    <CommunityFormView
      categoryList={categoryList!.map(category => category.name)}
      isDisabledButton={isDisabled()}
      data={data}
      selectedCategory={data.category}
      onClickCamera={(image: File, url: string) => {
        const newData = {
          ...data,
          imageFiles: [...data.imageFiles, image],
          imageUrls: [...data.imageUrls, url],
        };
        setData(newData);
      }}
      onClickMic={(audio: File, url: string) => {
        const newData = {
          ...data,
          audioFile: audio,
          audioUrl: url,
        };
        setData(newData);
      }}
      onDeleteAudio={() => {
        const newData = {
          ...data,
          audioFile: null,
          audioUrl: null,
        };
        setData(newData);
      }}
      onDeleteImage={(id: number) => {
        const newData = {
          ...data,
          imageFiles: [
            ...data.imageFiles.slice(0, id),
            ...data.imageFiles.slice(id + 1),
          ],
          imageUrls: [
            ...data.imageUrls.slice(0, id),
            ...data.imageUrls.slice(id + 1),
          ],
        };
        setData(newData);
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
      onClickClose={() => navigation(-1)}
      onChangeCategory={(categoryName: string) => {
        const newData = {
          ...data,
          category: categoryName,
          categoryId: categoryList!.filter(
            category => category.name === categoryName,
          )[0].id,
        };
        setData(newData);
      }}
      onChange={e => {
        const newData = {
          ...data,
          [e.target.name]: e.target.value,
        };
        setData(newData);
      }}
    />
  );
};

export default CommunityForm;
