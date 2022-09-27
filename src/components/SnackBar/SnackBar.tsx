import classNames from "classnames";
import styles from "./SnackBar.module.scss";

export interface Props {
  className?: string;
  content?: string;
  hasShadow?: boolean;
  icon?: React.ReactNode;
  size?: "small" | "large";
  position?: "bottom" | "middle";
}

const SnackBar = ({
  className,
  content,
  hasShadow,
  icon,
  size = "small",
  position = "bottom",
}: Props) => {
  return (
    <div
      className={classNames([
        className,
        styles.container,
        hasShadow && styles.shadow,
        size === "small" && styles.small,
        size === "large" && styles.large,
        position === "bottom" && styles.bottom,
        position === "middle" && styles.middle,
      ])}
    >
      {icon && <div className={styles.snackbarIcon}>{icon}</div>}
      <div className={styles.snackbarContent}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default SnackBar;
