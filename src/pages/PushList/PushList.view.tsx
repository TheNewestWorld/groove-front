import styles from "./PushList.module.scss";
import { ArrowIcon } from "../../assets/icon";
import Header from "../../components/Header";
import CircleImage from "../../components/CircleImage";

export interface Props {
  onClickBack?: () => void;
  monthList: { src: string; content: string; ago: string }[];
  pastList: { src: string; content: string; ago: string }[];
  src?: string;
}

const PushList = ({ onClickBack, monthList, pastList, src }: Props) => {
  const hasMonthList = monthList.length > 0;
  const hasPastList = pastList.length > 0;

  return (
    <div>
      <Header title="알림" left={<ArrowIcon />} onClickLeft={onClickBack} />
      {hasMonthList && <div className={styles.title}>이번 달</div>}

      {hasMonthList &&
        monthList.map((item, index) => (
          <div className={styles.items} key={index}>
            <CircleImage className={styles.image} src={item.src} />
            <div>
              <div className={styles.content}>{item.content}</div>
              <div className={styles.ago}>{item.ago}</div>
            </div>
          </div>
        ))}
      {hasMonthList && hasPastList && <div className={styles.division} />}

      {hasPastList && <div className={styles.title}>이전 활동</div>}

      {hasPastList &&
        pastList.map((item, index) => (
          <div className={styles.items} key={index}>
            <CircleImage className={styles.image} src={item.src} />
            <div>
              <div className={styles.content}>{item.content}</div>
              <div className={styles.ago}>{item.ago}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PushList;
