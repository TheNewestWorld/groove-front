import { useState } from "react";
import useCategoryListQuery from "../../../../common/queries/category/useCategoryListQuery";
import usePostDetailQuery from "../../../../common/queries/posts/usePostDetailQuery";
import convertURLtoFile from "../../../../helpers/convertUrlToFile";

type Props = {
  communityId: number;
};

const useCommunityEdit = ({ communityId }: Props) => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const {
    isLoading: isLoadingCategoryList,
    isError: isErrorCategoryList,
    categoryList,
  } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const {
    isLoading: isLoadingPostDetail,
    isError: isErrorPostDetail,
    post,
  } = usePostDetailQuery(
    {
      postId: communityId,
    },
    {
      enabled: !!communityId || !!categoryList,
      onSuccess: post => {
        post.attachments
          .filter(({ fileType }) => fileType === "POST_IMAGE")
          .map(async ({ uri, ...item }) => {
            const image = await convertURLtoFile(uri);
            setImageFiles([...imageFiles, image]);
          });

        post?.attachments
          .filter(({ fileType }) => fileType === "POST_RECORD")
          .map(async ({ uri }) => {
            const audio = await convertURLtoFile(uri);
            setAudioFile(audio);
          });
      },
    },
  );

  return {
    isLoading: isLoadingCategoryList || isLoadingPostDetail,
    isError: isErrorCategoryList || isErrorPostDetail,
    categoryList: categoryList ?? [],
    community: post
      ? {
          title: post.title,
          content: post.content,
          category: categoryList.filter(({ id }) => id === post.categoryId)[0]
            .name,
          categoryId: post.categoryId,
          // TODO: url 을 파일 객체화
          imageFiles: [],
          audioFile: null,
        }
      : undefined,
    imageList: post?.attachments
      .filter(({ fileType }) => fileType === "POST_IMAGE")
      .map(({ uri }) => uri),
    audio: post?.attachments
      .filter(({ fileType }) => fileType === "POST_RECORD")
      .map(({ uri }) => uri)[0],
  };
};

export default useCommunityEdit;
