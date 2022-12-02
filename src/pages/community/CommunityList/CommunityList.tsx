import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import useCategoryListQuery from "../../../common/queries/category/useCategoryListQuery";
import usePostListByCategoryQuery from "../../../common/queries/posts/usePostListQuery";
import CommunityListView from "./CommunityList.view";

interface SortOrderType {
  type: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
  label: string;
}

const CommunityList = () => {
  const filterList: SortOrderType[] = [
    {
      type: "CREATED_AT",
      label: "최신순",
    },
    {
      type: "LIKE_COUNT",
      label: "인기순",
    },
    {
      type: "COMMENT_COUNT",
      label: "댓글순",
    },
  ];

  const [sortOrderType, setSortOrderType] = useState<SortOrderType>(
    filterList[0],
  );

  const [activeCategory, setActiveCategory] =
    useState<{
      id: number;
      name: string;
    } | null>(null);

  const { isLoading, postList } = usePostListByCategoryQuery({
    size: 10,
    page: 0,
    sortOrderType: sortOrderType.type,
    categoryId: activeCategory == null ? undefined : activeCategory.id,
  });

  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const navigation = useNavigate();

  return (
    <CommunityListView
      activeFilter={sortOrderType.label}
      filterList={filterList.map(filter => filter.label)}
      onChangeFilter={(newFilterLabel: string) => {
        let newFilter: SortOrderType = filterList.filter(
          filter => filter.label === newFilterLabel,
        )[0];
        setSortOrderType(newFilter);
      }}
      onClickTab={(tab: string) => {
        let newCategory = categoryList!.filter(
          category => category.name === tab,
        )[0];
        setActiveCategory(newCategory);
      }}
      communityList={postList!.map(post => {
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
      })}
      onClickItem={(postId: number) => {
        navigation(BuildPaths.communityDetail(postId.toString()));
      }}
    />
  );
};

export default CommunityList;
