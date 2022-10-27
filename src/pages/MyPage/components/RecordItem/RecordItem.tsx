import { format } from "date-fns";
import styles from "./RecordItem.module.scss";

interface Props {
  id: number;
  title: string;
  date: Date;
  length: string;
  url: string;
  onDelete: (id: number) => void;
}

const RecordItem = ({ id, title, date, length, url, onDelete }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{format(date, "yyyy. M. d")}</div>
      </div>
      <div className={styles.length}>{length}</div>
    </div>
  );
};

export default RecordItem;
