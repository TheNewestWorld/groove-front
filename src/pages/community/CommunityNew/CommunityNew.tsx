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

  const navigation = useNavigate();

  return (
    <>
      <Header
        title="게시물 작성하기"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <CommunityFormView
        categoryList={categoryList}
        onSubmit={(data) => {
          postPost({
            title: data.title,
            content: data.content,
            categoryId: data.categoryId,
            attachments: data.imageFiles.concat(data.audioFile!),
          });
          navigation(-1);
        }}
      />
    </>
  );
};

export default CommunityNew;
