import classnames from "classnames";
import { ArrowIcon } from "../../assets/icon";
import styles from "./SettingList.module.scss";

export interface Props {
  list: {
    title: string;
    onClick: () => void;
  }[];
  classNames?: string;
}

const SettingList = ({ list, classNames }: Props) => {
  return (
    <div className={classnames([styles.container, classNames])}>
      {list.map(({ title, onClick }) => (
        <div key={title} onClick={onClick} className={styles.item}>
          <div className={styles.title}>{title}</div>
          <ArrowIcon className={styles.arrow} />
        </div>
      ))}
    </div>
  );
};

export default SettingList;
