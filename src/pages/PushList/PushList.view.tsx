import styles from "./PushList.module.scss";
import { ArrowIcon } from "../../assets/icon";
import Header from "../../components/Header";
import ListSection from "./components/ListSection";

export interface Props {
  currentMonthList?: { src: string; content: string; ago: string }[];
  pastMonthList?: { src: string; content: string; ago: string }[];
  onClickBack?: () => void;
}

const PushList = ({ onClickBack, currentMonthList, pastMonthList }: Props) => {
  const showDivider = currentMonthList && pastMonthList;

  return (
    <div>
      <Header title="알림" left={<ArrowIcon />} onClickLeft={onClickBack} />

      {currentMonthList && (
        <ListSection sectionTitle="이번 달" list={currentMonthList} />
      )}

      {showDivider && <div className={styles.division} />}

      {pastMonthList && (
        <ListSection sectionTitle="이전 활동" list={pastMonthList} />
      )}
    </div>
  );
};

export default PushList;
