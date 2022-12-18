import { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import useCategoryListQuery from "../../../common/queries/category/useCategoryListQuery";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import Header from "../../../components/Header";
import CommunityFormView from "../CommunityForm/CommunityForm.view";

const CommunityEdit = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });
  const { isLoading, post } = usePostDetailQuery(
    {
      postId: Number(communityId),
    },
    {
      enabled: !!communityId,
    }
  );

  if (isLoading) {
    // TOOD
    return <>LOADING...</>;
  }

  return (
    <>
      <Header
        title="게시물 수정하기"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <CommunityFormView
        categoryList={categoryList}
        data={{
          title: "",
          content: "",
          category: "",
          categoryId: 0,
          imageFiles: [],
          audioFile: null,
        }}
        onSubmit={(form) => {}}
      />
    </>
  );
};

export default CommunityEdit;
