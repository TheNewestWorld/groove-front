import useCategoryListQuery from "../../../../common/queries/category/useCategoryListQuery";
import usePostDetailQuery from "../../../../common/queries/posts/usePostDetailQuery";

type Props = {
  communityId: number;
};

const useCommunityEdit = ({ communityId }: Props) => {
  const { isLoading: isLoadingCategoryList, categoryList } =
    useCategoryListQuery({
      categoryGroup: "COMMUNITY",
    });

  const { isLoading: isLoadingPostDetail, post } = usePostDetailQuery(
    {
      postId: communityId,
    },
    {
      enabled: !!communityId,
    }
  );

  return {
    isLoading: isLoadingCategoryList || isLoadingPostDetail,
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
  };
};

export default useCommunityEdit;
