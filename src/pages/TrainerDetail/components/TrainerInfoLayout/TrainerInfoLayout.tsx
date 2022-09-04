import { type } from "@testing-library/user-event/dist/type";
import styles from "./TrainerInfoLayout.module.scss";
import { ArrowIcon } from "../../../../assets/icon";

export interface Props {
  title: string;
  type?: "CLICKABLE";
  right?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

const TrainerInfoLayout = ({
  title,
  type,
  right,
  children,
  onClick,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div onClick={type == "CLICKABLE" ? onClick : undefined}>
          <span className={styles.title}>{title}</span>
          {type == "CLICKABLE" && <ArrowIcon className={styles.titleIcon} />}
        </div>
        {right}
      </div>
      {children}
    </div>
  );
};

export default TrainerInfoLayout;
