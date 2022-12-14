import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import CommunityListView from "./CommunityList.view";
import useCommunityList from "./hooks/useCommunityList";

interface SortOrderType {
  type: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
  label: string;
}

const sortList: SortOrderType[] = [
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

const CommunityList = () => {
  const navigation = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [sortType, setSortType] = useState<SortOrderType>(sortList[0]);

  const { isLoading, categoryList, activeCategoryName, communityList } =
    useCommunityList({
      category,
      sortType: sortType.type,
    });

  if (isLoading) {
    return <></>;
  }

  return (
    <CommunityListView
      isLoading={isLoading}
      activeSort={sortType.label}
      sortList={sortList.map((item) => item.label)}
      activeCategory={activeCategoryName}
      categoryList={categoryList.map((item) => item.name)}
      communityList={communityList}
      isEmpty={communityList.length === 0}
      onChangeSortType={(selectedSort: string) => {
        setSortType(sortList.filter((item) => item.label === selectedSort)[0]);
      }}
      onChangeCategory={(tab: string) => {
        navigation(
          BuildPaths.communityHome(
            categoryList.filter((item) => item.name === tab)[0].name
          )
        );
      }}
      onClickItem={(postId: number) => {
        navigation(BuildPaths.communityDetail(postId.toString()));
      }}
    />
  );
};

export default CommunityList;
