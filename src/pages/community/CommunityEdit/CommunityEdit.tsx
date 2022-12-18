import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import { updatePost } from "../../../common/apis/post";
import Header from "../../../components/Header";
import CommunityFormView from "../CommunityForm/CommunityForm.view";
import useCommunityEdit from "./hooks/useCommunityEdit";

const CommunityEdit = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { isLoading, categoryList, community, imageList, audio } =
    useCommunityEdit({
      communityId: Number(communityId),
    });

  if (isLoading || !community) {
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
        data={community}
        imageList={imageList}
        audio={audio}
        onSubmit={(form) => {
          updatePost(
            { postId: Number(communityId) },
            {
              title: form.title,
              content: form.content,
              categoryId: form.categoryId,
              attachments: form.imageFiles.concat(form.audioFile!),
            }
          ).then(() => navigation(-1));
        }}
      />
    </>
  );
};

export default CommunityEdit;
