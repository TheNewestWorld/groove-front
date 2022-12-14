import useCategoryListQuery from "../../../../common/queries/category/useCategoryListQuery";
import usePostListByCategoryQuery from "../../../../common/queries/posts/usePostListQuery";

type Props = {
  category: string;
  sortType: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
};

const useCommunityList = ({ category, sortType }: Props) => {
  const { isLoading: isLoadingCategoryList, categoryList } =
    useCategoryListQuery({
      categoryGroup: "COMMUNITY",
    });

  const { isLoading: isLoadingPostList, postList } = usePostListByCategoryQuery(
    {
      size: 10,
      page: 0,
      sortOrderType: sortType,
      categoryId:
        category === "전체 게시물"
          ? undefined
          : categoryList?.filter((item) => category === item.name)[0].id,
    },
    { enabled: !!category }
  );

  return {
    isLoading: isLoadingCategoryList || isLoadingPostList,
    categoryList: [
      { id: -1, name: "전체 게시물", categoryGroup: "COMMUNITY" },
      ...(categoryList ?? []),
    ],
    activeCategoryName:
      category === "전체 게시물"
        ? category
        : categoryList?.filter((item) => item.name === category)[0]?.name ?? "",
    communityList:
      postList?.map((post) => {
        return {
          id: post.id,
          user: post.nickname,
          userImageSrc: post.profileUri,
          title: post.title,
          description: post.content,
          likeCount: post.likeCount,
          commentCount: post.commentCount,
          liked: post.likeFlag,
        };
      }) ?? [],
  };
};

export default useCommunityList;
