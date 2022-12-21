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
  deleteItem: (value: string, index?: number) => void;
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
}

const SearchListView = ({
  keyword,
  setKeyword,
  list,
  communityList,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
}: Props) => {
  const [showEmpty, setEmpty] = useState<boolean>(false);
  const hasResult = !!communityList.length;

  console.log("showEmpty", showEmpty);

  return (
    <div className={styles.container}>
      <SearchEntry
        keyword={keyword}
        setKeyword={setKeyword}
        list={list}
        deleteItem={deleteItem}
        onClickCancle={onClickCancle}
        onSubmitSearch={(value) => {
          onSubmitSearch(value);
          setEmpty(true);
        }}
        showList={!showEmpty}
      />

      {hasResult
        ? communityList.map((item) => (
            <div className={styles.item} key={item.id}>
              <CommunityItem {...item} />
            </div>
          ))
        : showEmpty && (
            <div className={styles.text}>찾으시는 내용이 없어요.</div>
          )}
    </div>
  );
};

export default SearchListView;
