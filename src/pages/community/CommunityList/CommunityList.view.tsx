import CommunityItem, {
  Props as CommunityItemView,
} from "../../../components/CommunityItem";
import TopDownFilter from "../../../components/TopDownFilter";
import TabList from "../../../components/TabList";
import styles from "./CommunityList.module.scss";

export interface Props {
  activeFilter: string;
  filterList: string[];
  onChangeFilter: (filter: string) => void;
  onClickTab: (tab: string) => void;
  communityList: CommunityItemView[];
  onClickItem: (id: number) => void;
}

const CommunityListView = ({
  activeFilter,
  filterList,
  onChangeFilter,
  onClickTab,
  communityList,
  onClickItem,
}: Props) => {
  return (
    <div className={styles.container}>
      <TabList
        type="round"
        activeTab="전체 게시물"
        tabList={["전체 게시물", "보컬 이야기", "일상 이야기", "기타"]}
        onClickTab={onClickTab}
      />
      <TopDownFilter
        className={styles.filter}
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {communityList.map((item, index) => (
        <div className={styles.item} key={index}>
          <CommunityItem
            {...item}
            onClick={() => {
              return onClickItem(item.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CommunityListView;
