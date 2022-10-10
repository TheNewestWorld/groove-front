import styles from "./Header.module.scss";

export interface Props {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({ title, left, right, onLeftClick, onRightClick }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.icon} onClick={onLeftClick}>
        {left}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.icon} onClick={onRightClick}>
        {right}
      </div>
    </header>
  );
};

export default Header;
