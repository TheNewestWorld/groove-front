import styles from "./Header.module.scss";

export interface Props {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

const Header = ({ title, left, right, onClickLeft, onClickRight }: Props) => {
  return (
    <header className={styles.header}>
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
