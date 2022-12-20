import CommunityItem, {
  Props as CommunityItemView,
} from "../../../components/CommunityItem";
import TopDownFilter from "../../../components/TopDownFilter";
import TabList from "../../../components/TabList";
import styles from "./CommunityList.module.scss";

export interface Props {
  activeSort: string;
  sortList: string[];
  activeCategory: string;
  categoryList: string[];
  communityList: CommunityItemView[];
  onChangeSortType: (filter: string) => void;
  onChangeCategory: (tab: string) => void;
  onClickItem: (id: number) => void;
}

const CommunityListView = ({
  activeSort,
  sortList,
  activeCategory,
  categoryList,
  communityList,
  onChangeSortType,
  onChangeCategory,
  onClickItem,
}: Props) => {
  return (
    <div className={styles.container}>
      <TabList
        type="round"
        activeTab={activeCategory}
        tabList={categoryList}
        onClickTab={onChangeCategory}
      />
      <TopDownFilter
        className={styles.filter}
        activeFilter={activeSort}
        filterList={sortList}
        onClickFilter={onChangeSortType}
      />
      {communityList.length ? (
        communityList.map((item, index) => (
          <div className={styles.item} key={index}>
            <CommunityItem
              {...item}
              onClick={() => {
                return onClickItem(item.id);
              }}
            />
          </div>
        ))
      ) : (
        // TODO(in.heo): 빈 페이지 추가
        <div>작성된 글이 없어요. </div>
      )}
    </div>
  );
};

export default CommunityListView;
