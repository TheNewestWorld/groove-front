import styles from "./TrainerList.module.scss";

import TabList, { Props as TabListView } from "../../../components/TabList";
import TopDownFilter, {
  Props as TopDownFilterView,
} from "../../../components/TopDownFilter";
import TrainerItem, {
  Props as TrainerItemView,
} from "../../../components/TrainerItem";
import Navigation from "../../../components/Navigation";
import MainHeader from "../../../components/MainHeader";

export interface Props {
  userImageSrc: string;
  tabList: TabListView;
  topDownFilter: TopDownFilterView;
  trainerItems: TrainerItemView[];
}

const TrainerListView = ({
  userImageSrc,
  tabList,
  topDownFilter,
  trainerItems,
}: Props) => {
  return (
    <div className={styles.container}>
      <MainHeader className={styles.mainHeader} userImageSrc={userImageSrc} />
      <TabList className={styles.tabList} {...tabList} />
      <TopDownFilter className={styles.topDownFilter} {...topDownFilter} />
      <div className={styles.trainerItemContainer}>
        {trainerItems.map((item, index) => (
          <TrainerItem className={styles.trainerItem} key={index} {...item} />
        ))}
      </div>
      <Navigation current="TRAINING" />
    </div>
  );
};

export default TrainerListView;
