import classNames from "classnames";
import { YellowStartFillIcon } from "../../assets/icon";
import styles from "./SnackBar.module.scss";

export interface Props {
  className?: string;
  content?: string;
  hasIcon?: boolean;
}

const SnackBar = ({
  className,
  content,
  hasIcon,
}: Props) => {
  return (
    <div className={classNames([className, styles.container])}>
      {hasIcon &&
        <div className={styles.snackbarIcon}>
          {/* 임시 아이콘*/}
          <YellowStartFillIcon />
        </div>
      }
      <div className={styles.snackbarContent}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default SnackBar;
