import styles from "./PushList.module.scss";
import EmptyPage from "../../components/EmptyPage";
import ListSection from "./components/ListSection";

export interface Props {
  monthList: { id: number; src: string; content: string; ago: string }[];
  pastList: { id: number; src: string; content: string; ago: string }[];
  emptyText: string;
  onClickItem: (id: number) => void;
  src?: string;
}

const PushList = ({
  monthList,
  pastList,
  emptyText,
  onClickItem,
  src,
}: Props) => {
  const hasMonthList = monthList.length > 0;
  const hasPastList = pastList.length > 0;
  return (
    <div>
      {hasMonthList && (
        <ListSection
          sectionTitle="이번 달"
          list={monthList}
          onClickItem={onClickItem}
        />
      )}

      {hasMonthList && hasPastList && <div className={styles.division} />}

      {hasPastList && (
        <ListSection
          sectionTitle="이전 활동"
          list={pastList}
          onClickItem={onClickItem}
        />
      )}

      {!hasMonthList && !hasPastList && (
        <div>
          <img className={styles.emptyImage} src={src} alt="" />
          <EmptyPage className={styles.empty} description={emptyText} />
        </div>
      )}
    </div>
  );
};

export default PushList;
