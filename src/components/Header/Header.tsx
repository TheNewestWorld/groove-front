import classNames from "classnames";
import styles from "./Header.module.scss";

export interface Props {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  className?: string;
}

const Header = ({
  title,
  left,
  right,
  onClickLeft,
  onClickRight,
  className,
}: Props) => {
  return (
    <header className={classNames([styles.header, className])}>
      <div className={styles.icon} onClick={onClickLeft}>
        {left}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.icon} onClick={onClickRight}>
        {right}
      </div>
    </header>
  );
};

export default Header;
