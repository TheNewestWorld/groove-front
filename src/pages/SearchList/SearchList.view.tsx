import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import styles from "./SearchList.module.scss";
import SearchInput from "../../components/SearchInput";

export interface Props {
  communityList: CommunityItemView[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
}

const SearchListView = ({
  communityList,
  onClickCancle,
  onSubmitSearch,
}: Props) => {
  return (
    <div>
      <div className={styles.searchInput}>
        <SearchInput
          onClickCancle={onClickCancle}
          onSubmitSearch={onSubmitSearch}
        />
      </div>
      {communityList.map((item, index) => (
        <div className={styles.item} key={index}>
          <CommunityItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default SearchListView;
