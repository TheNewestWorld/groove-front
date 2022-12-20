import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildPaths from "../../common/paths";
import usePostListByCategoryQuery from "../../common/queries/posts/usePostListQuery";
import Loading from "../../components/Loading";
import SearchListView from "./SearchList.view";

const SearchList = () => {
  const navigation = useNavigate();
  const [searchWord, setSearchWord] = useState<string>("");
  const [submitKeyword, setSubmitKeyword] = useState<string>("");

  const { isLoading, postList } = usePostListByCategoryQuery(
    {
      size: 10,
      page: 0,
      sortOrderType: "CREATED_AT",
      word: submitKeyword,
    },
    {
      enabled: submitKeyword.length !== 0,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SearchListView
      keyword={searchWord}
      setKeyword={setSearchWord}
      communityList={
        postList?.map(
          ({
            id,
            title,
            content,
            nickName,
            profileUri,
            likeCount,
            likeFlag,
            commentCount,
          }) => {
            return {
              id,
              user: nickName,
              userImageSrc: profileUri,
              title,
              description: content,
              likeCount,
              commentCount,
              liked: likeFlag,
              onClick: () => {
                navigation(BuildPaths.communityDetail(id.toString()));
              },
            };
          }
        ) ?? []
      }
      onClickCancle={() => navigation(BuildPaths.communityHome("전체 게시물"))}
      onSubmitSearch={(keyword) => {
        setSubmitKeyword(keyword);
      }}
      deleteItem={() => alert("TODO")}
      // TODO: 검색 기록 기능 추가
      list={[]}
      searchWord={searchWord}
    />
  );
};

export default SearchList;
