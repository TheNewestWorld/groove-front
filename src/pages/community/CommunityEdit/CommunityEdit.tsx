import { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icon";
import usePostDetailQuery from "../../../common/queries/posts/usePostDetailQuery";
import Header from "../../../components/Header";
import CommunityFormView from "../CommunityForm/CommunityForm.view";

const CommunityEdit = () => {
  const navigation = useNavigate();
  const { communityId } = useParams<{ communityId: string }>();

  const { isLoading, isError, post } = usePostDetailQuery(
    {
      postId: Number(communityId),
    },
    {
      enabled: !!communityId,
    }
  );

  return (
    <>
      <Header
        title="게시물 수정하기"
        left={<ArrowIcon />}
        onClickLeft={() => navigation(-1)}
      />
      <CommunityFormView
        categoryList={[]}
        isDisabledButton={false}
        data={{
          title: "",
          content: "",
          imageUrls: [],
          audioUrl: null,
        }}
        selectedCategory={""}
        onClickCamera={function (image: File, url: string): void {
          throw new Error("Function not implemented.");
        }}
        onClickMic={function (audio: File, url: string): void {
          throw new Error("Function not implemented.");
        }}
        onDeleteAudio={function (): void {
          throw new Error("Function not implemented.");
        }}
        onDeleteImage={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
        onClickCreate={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        onChangeCategory={function (category: string): void {
          throw new Error("Function not implemented.");
        }}
        onChange={function (
          e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default CommunityEdit;
