import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildPaths from "../../common/paths";
import usePostListByCategoryQuery from "../../common/queries/posts/usePostListQuery";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import SearchListView from "./SearchList.view";

const spliter = "|";
const RECENT_SEARCH_KEYWORD = "recentSearchKeyword";

const setLocalStorage = (keywords: string[]) => {
  keywords = keywords.filter((keyword) => keyword.length > 0);

  if (keywords.length === 0) {
    localStorage.removeItem(RECENT_SEARCH_KEYWORD);
  } else {
    localStorage.setItem(RECENT_SEARCH_KEYWORD, keywords.join(spliter));
  }
};
const SearchList = () => {
  const navigation = useNavigate();
  const [searchWord, setSearchWord] = useState<string>("");
  const [submitKeyword, setSubmitKeyword] = useState<string>("");
  const [recentSearchKeyword, setRecentSearchKeyword] = useState<string[]>(
    localStorage.getItem("recentSearchKeyword")?.split(spliter) ?? []
  );

  const { isLoading, isError, postList } = usePostListByCategoryQuery(
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

  useEffect(() => {
    setLocalStorage(recentSearchKeyword);
  }, [recentSearchKeyword]);

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isLoading && <Loading />}
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
        onClickCancle={() =>
          navigation(BuildPaths.communityHome("전체 게시물"))
        }
        onSubmitSearch={(keyword) => {
          setSubmitKeyword(keyword);
          const newKeywords = [...recentSearchKeyword, keyword];
          setRecentSearchKeyword(newKeywords);
        }}
        deleteItem={(keyword, index) => {
          const newKeywords = recentSearchKeyword.filter(
            (word, idx) => keyword !== word || index !== idx
          );
          setRecentSearchKeyword(newKeywords);
        }}
        list={[
          {
            title: "최근 검색 기록",
            type: "line",
            itemList: recentSearchKeyword,
          },
        ]}
      />
    </>
  );
};

export default SearchList;
