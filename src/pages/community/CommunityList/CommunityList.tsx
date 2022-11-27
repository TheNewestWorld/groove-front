import { openStdin } from "process";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryList } from "../../../common/apis/category";
import {
  getPostListByCategory,
  GetPostResponse,
} from "../../../common/apis/post";
import BuildPaths from "../../../common/paths";
import CommunityListView from "./CommunityList.view";

interface FilterInfo {
  type: "CREATED_AT" | "LIKE_COUNT" | "COMMENT_COUNT";
  label: string;
}

interface CategoryInfo {
  id: number;
  name: string;
}

const CommunityList = () => {
  const navigation = useNavigate();

  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  const [categoryList, setCategoryList] = useState<CategoryInfo[]>([]);
  const [activeCategory, setActiveCategory] =
    useState<CategoryInfo | null>(null);

  const filterList: FilterInfo[] = [
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
  const [activeFilter, setActiveFilter] = useState<FilterInfo>(filterList[0]);

  const [postList, setPostList] = useState<GetPostResponse[]>([]);

  useEffect(() => {
    getCategoryList({ categoryGroup: "COMMUNITY" })
      .then(response => {
        setCategoryList(response);
      })
      .catch(() => {
        alert("실패");
      });
  });

  return (
    <CommunityListView
      activeFilter={activeFilter.label}
      filterList={filterList.map(filter => filter.label)}
      onChangeFilter={(newFilterLabel: string) => {
        let newFilter: FilterInfo = filterList.filter(
          filter => filter.label === newFilterLabel,
        )[0];
        setActiveFilter(newFilter);
        // TODO: useQuery
        getPostListByCategory({
          page: page,
          size: size,
          sortOrderType: newFilter.type,
          categoryId: activeCategory?.id,
        })
          .then(response => {
            setPostList(response.contents);
          })
          .catch(() => {
            alert("TODO: 예외처리");
          });
      }}
      onClickTab={(tab: string) => {
        let newCategory = categoryList.filter(
          category => category.name === tab,
        )[0];
        setActiveCategory(newCategory);
        // TODO: useQuery
        getPostListByCategory({
          page: page,
          size: size,
          sortOrderType: activeFilter.type,
          categoryId: newCategory.id,
        })
          .then(response => {
            setPostList(response.contents);
          })
          .catch(() => {
            alert("TODO: 예외처리");
          });
      }}
      communityList={postList.map(post => {
        return {
          user: post.nickname,
          userImageSrc: post.profileUri,
          title: post.title,
          description: post.content,
          likeCount: post.likeCount,
          commentCount: post.commentCount,
          liked: post.likeFlag,
          onClick: () => {}
          // onClick: (postId: number) => {
          //   navigation(BuildPaths.communityDetail(postId));
          // },
        };
      })}
    />
  );
};

export default CommunityList;
