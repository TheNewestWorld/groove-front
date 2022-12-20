import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import { postPost } from "../../../common/apis/post";
import useCategoryListQuery from "../../../common/queries/category/useCategoryListQuery";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import CommunityFormView from "../CommunityForm/CommunityForm.view";

const CommunityNew = () => {
  const navigation = useNavigate();
  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <>
      {isLoading && <Loading />}
      <Header
        title="게시물 작성하기"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <CommunityFormView
        categoryList={categoryList}
        onSubmit={(data) => {
          setLoading(true);
          postPost({
            title: data.title,
            content: data.content,
            categoryId: data.categoryId,
            attachments: data.imageFiles.concat(data.audioFile!),
          }).finally(() => {
            setLoading(false);
            navigation(-1);
          });
        }}
      />
    </>
  );
};

export default CommunityNew;
