import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import SearchEntry from "./components/SearchEntry";
import styles from "./SearchList.module.scss";

export interface Props {
  communityList: CommunityItemView[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  deleteItem: (value: string) => void;
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  searchWord: string;
}

const SearchListView = ({
  list,
  communityList,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
  searchWord = "",
}: Props) => {
  return (
    <div>
      <SearchEntry list={list} deleteItem={deleteItem} onClickCancle={onClickCancle} onSubmitSearch={onSubmitSearch} />
      {((communityList.length === 0) && (searchWord !== "")) && (
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
