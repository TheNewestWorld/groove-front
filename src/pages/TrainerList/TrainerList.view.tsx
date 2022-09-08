import styles from "./TrainerList.module.scss";

import TabList, { Props as TabListView } from "../../components/TabList";
import TopDownFilter, {
  Props as TopDownFilterView,
} from "../../components/TopDownFilter";
import TrainerItem, {
  Props as TrainerItemView,
} from "../../components/TrainerItem";
import Navigation from "../../components/Navigation";
import MainHeader from "../../components/MainHeader";

export interface Props {
  tabList: TabListView;
  topDownFilter: TopDownFilterView;
  trainerItems: TrainerItemView[];
}

const TrainerListView = ({ tabList, topDownFilter, trainerItems }: Props) => {
  return (
    <div className={styles.container}>
      <MainHeader className={styles.mainHeader} title="트레이닝"/>
      <TabList className={styles.tabList} {...tabList} />
      <TopDownFilter className={styles.topDownFilter} {...topDownFilter} />
      {trainerItems.map((item, index) => (
        <TrainerItem className={styles.trainerItem} key={index} {...item} />
      ))}
      <Navigation current="TRAINING" />
    </div>
  );
};

export default TrainerListView;
