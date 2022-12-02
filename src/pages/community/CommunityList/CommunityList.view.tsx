import CommunityItem, {
  Props as CommunityItemView,
} from "../../../components/CommunityItem";
import TopDownFilter from "../../../components/TopDownFilter";
import TabList from "../../../components/TabList";
import styles from "./CommunityList.module.scss";

export interface Props {
  isLoading: boolean;
  activeFilter: string;
  filterList: string[];
  activeTab: string;
  tabList: string[];
  communityList: CommunityItemView[];
  isEmpty: boolean;
  onChangeFilter: (filter: string) => void;
  onClickTab: (tab: string) => void;
  onClickItem: (id: number) => void;
}

const CommunityListView = ({
  isLoading,
  activeFilter,
  filterList,
  activeTab,
  tabList,
  communityList,
  isEmpty,
  onChangeFilter,
  onClickTab,
  onClickItem,
}: Props) => {
  return (
    <div className={styles.container}>
      <TabList
        type="round"
        activeTab={activeTab}
        tabList={tabList}
        onClickTab={onClickTab}
      />
      <TopDownFilter
        className={styles.filter}
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {isLoading ? (
        // TODO(in.heo): 로딩 화면 추가
        <div> 로딩 화면 추가 </div>
      ) : isEmpty ? (
        // TODO(in.heo): 빈 페이지 추가
        <div>작성된 글이 없어요. </div>
      ) : (
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
      )}
    </div>
  );
};

export default CommunityListView;
