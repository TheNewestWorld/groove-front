import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PencilIcon } from "../../../assets/icon";
import BuildPaths from "../../../common/paths";
import CircleButton from "../../../components/CircleButton";
import MainHeader from "../../../components/MainHeader";
import { useUserState } from "../../../hooks";
import FloatingLayout from "../../../layout/FloatingLayout";
import CommunityListView from "./CommunityList.view";
import useCommunityList from "./hooks/useCommunityList";
import styles from "./CommunityList.module.scss";
import { InView } from "react-intersection-observer";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

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
  const { profile } = useUserState();
  const { category } = useParams<{ category: string }>();
  const [sortType, setSortType] = useState<SortOrderType>(sortList[0]);

  const {
    isLoading,
    isError,
    categoryList,
    activeCategoryName,
    communityList,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useCommunityList({
    category,
    sortType: sortType.type,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <MainHeader
        userImageSrc={profile}
        onSearchClick={() => navigation(BuildPaths.search())}
        onAlarmClick={() => {
          alert("TODO");
        }}
        onProfileClick={() => navigation(BuildPaths.mypage("RECORD"))}
      />
      <CommunityListView
        activeSort={sortType.label}
        sortList={sortList.map((item) => item.label)}
        activeCategory={activeCategoryName}
        categoryList={categoryList.map((item) => item.name)}
        communityList={communityList}
        onChangeSortType={(selectedSort: string) => {
          setSortType(
            sortList.filter((item) => item.label === selectedSort)[0]
          );
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
      <InView
        skip={!hasNextPage || isFetchingNextPage}
        onChange={(inView) => {
          if (inView && hasNextPage) {
            fetchNextPage();
          }
        }}
      />
      <FloatingLayout>
        <CircleButton
          className={styles.floatingPencil}
          icon={
            <PencilIcon
              onClick={() => {
                navigation(BuildPaths.communityNew());
              }}
            />
          }
        />
      </FloatingLayout>
    </>
  );
};

export default CommunityList;
