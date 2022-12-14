import { useState } from "react";
import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import SearchEntry from "./components/SearchEntry";
import styles from "./SearchList.module.scss";

export interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  communityList: CommunityItemView[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  deleteItem: (value: string) => void;
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  searchWord: string;
}

const SearchListView = ({
  keyword,
  setKeyword,
  list,
  communityList,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
  searchWord = "",
}: Props) => {
  const [result, setResult] = useState<boolean>(false);

  return (
    <div>
      <SearchEntry
        keyword={keyword}
        setKeyword={setKeyword}
        list={list}
        deleteItem={deleteItem}
        onClickCancle={onClickCancle}
        onSubmitSearch={(keyword) => {
          setResult(true);
          onSubmitSearch(keyword);
        }}
      />
      {communityList.length === 0 && searchWord !== "" && result && (
        <div className={styles.text}>찾으시는 내용이 없어요.</div>
      )}
      {communityList.map((item, index) => (
        <div className={styles.item} key={index}>
          <CommunityItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default SearchListView;
