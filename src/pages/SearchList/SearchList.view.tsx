import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import styles from "./SearchList.module.scss";
import SearchEntry from "../Search/components/SearchEntry";

export interface Props {
  communityList: CommunityItemView[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  deleteItem: (value: string) => void;
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  searchWord?: string;
}

const SearchListView = ({
  list,
  communityList,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
  searchWord = undefined,
}: Props) => {
  return (
    <div>
      <SearchEntry list={list} deleteItem={deleteItem} onClickCancle={onClickCancle} onSubmitSearch={onSubmitSearch} />
      {((communityList.length === 0) && (searchWord !== undefined)) && (
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
