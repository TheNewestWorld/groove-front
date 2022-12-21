import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import { updatePost } from "../../../common/apis/post";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import CommunityFormView from "../CommunityForm/CommunityForm.view";
import useCommunityEdit from "./hooks/useCommunityEdit";

const CommunityEdit = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const { isLoading, isError, categoryList, community, imageList, audio } =
    useCommunityEdit({
      communityId: Number(communityId),
    });

  if (isLoading || !community) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isUpdating && <Loading />}
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
          setUpdating(true);
          updatePost(
            { postId: Number(communityId) },
            {
              title: form.title,
              content: form.content,
              categoryId: form.categoryId,
              attachments: form.imageFiles.concat(form.audioFile!),
            }
          ).finally(() => {
            setUpdating(false);
            navigation(-1);
          });
        }}
      />
    </>
  );
};

export default CommunityEdit;
