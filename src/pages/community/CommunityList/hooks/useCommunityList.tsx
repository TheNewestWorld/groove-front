import useCategoryListQuery from "../../../../common/queries/category/useCategoryListQuery";
import usePostListByCategoryQuery from "../../../../common/queries/posts/usePostListQuery";

type Props = {
  category?: string;
  sortType: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
};

const useCommunityList = ({ category, sortType }: Props) => {
  const {
    isLoading: isLoadingCategoryList,
    isError: isErrorCategoryList,
    categoryList
  } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const {
    isLoading: isLoadingPostList,
    isError: isErrorPostList,
    postList,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = usePostListByCategoryQuery(
    {
      size: 10,
      page: 0,
      sortOrderType: sortType,
      categoryId:
        category === "전체 게시물"
          ? undefined
          : categoryList?.filter(item => category === item.name)[0].id,
    },
    { enabled: !!category },
  );

  return {
    isLoading: isLoadingCategoryList || isLoadingPostList,
    isError: isErrorCategoryList || isErrorPostList,
    categoryList: [
      { id: -1, name: "전체 게시물", categoryGroup: "COMMUNITY" },
      ...(categoryList ?? []),
    ],
    activeCategoryName:
      category === "전체 게시물"
        ? category
        : categoryList?.filter(item => item.name === category)[0]?.name ?? "",
    communityList:
      postList?.map(post => {
        return {
          id: post.id,
          user: post.nickName,
          userImageSrc: post.profileUri,
          title: post.title,
          description: post.content,
          likeCount: post.likeCount,
          commentCount: post.commentCount,
          liked: post.likeFlag,
        };
      }) ?? [],
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useCommunityList;
