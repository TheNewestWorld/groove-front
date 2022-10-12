import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import TopDownFilter from "../../components/TopDownFilter";
import styles from "./CommunityList.module.scss";
import TabList from "../../components/TabList";

export interface Props {
  activeFilter: string;
  filterList: string[];
  onChangeFilter: (filter: string) => void;
  communityList: CommunityItemView[];
}

const CommunityListView = ({
  activeFilter,
  filterList,
  onChangeFilter,
  communityList,
}: Props) => {
  return (
    <div className={styles.container}>
      <TabList
        type="round"
        activeTab="전체 게시물"
        tabList={["전체 게시물", "보컬 이야기", "일상 이야기", "기타"]}
        onClickTab={(tab: string) => alert(tab)}
      />
      <TopDownFilter
        className={styles.filter}
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {communityList.map((item, index) => (
        <div className={styles.item}>
          <CommunityItem key={index} {...item} />
        </div>
      ))}
    </div>
  );
};

export default CommunityListView;
