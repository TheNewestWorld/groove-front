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

  const { categoryList } = useCategoryListQuery({
    categoryGroup: "COMMUNITY",
  });

  const [activeCategory, setActiveCategory] = useState<{
    id: number;
    name: string;
  }>(
    categoryList && categoryList.length > 0
      ? categoryList[0]
      : { id: 0, name: "전체 게시물" },
  );

  const { isLoading, postList } = usePostListByCategoryQuery({
    size: 10,
    page: 0,
    sortOrderType: sortOrderType.type,
    categoryId: activeCategory == null ? undefined : activeCategory.id,
  });

  const navigation = useNavigate();

  return (
    <CommunityListView
      isLoading={isLoading}
      activeFilter={sortOrderType.label}
      filterList={filterList.map(filter => filter.label)}
      activeTab={activeCategory?.name}
      tabList={
        categoryList && categoryList.length > 0
          ? categoryList.map(category => category.name)
          : ["전체 게시물"]
      }
      communityList={
        postList
          ? postList!.map(post => {
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
            })
          : []
      }
      isEmpty={!(postList && postList.length > 0)}
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
      onClickItem={(postId: number) => {
        navigation(BuildPaths.communityDetail(postId.toString()));
      }}
    />
  );
};

export default CommunityList;
