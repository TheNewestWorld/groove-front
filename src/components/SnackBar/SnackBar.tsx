import classNames from "classnames";
import styles from "./SnackBar.module.scss";

export interface Props {
  className?: string;
  content?: string;
  hasShadow?: boolean;
  icon?: React.ReactNode;
  size?: string;
}

const SnackBar = ({
  className,
  content,
  hasShadow,
  icon,
  size,
}: Props) => {
  return (
    <div className={classNames([className, styles.container, hasShadow && styles.container__addShadow, size === "long" && styles.container__longSize, size === "short" && styles.container__shortSize])}>
      {icon &&
        <div className={styles.snackbarIcon}>
          {icon}
        </div>
      }
      <div className={styles.snackbarContent}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default SnackBar;
