import './Header.scss';

export interface Props {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({ title, left, right, onLeftClick, onRightClick }: Props) => {
  return (
    <header className="header">
      <div onClick={onLeftClick}>{left}</div>
      <div className="header__title">{title}</div>
      <div onClick={onRightClick}>{right}</div>
    </header>
  );
};

export default Header;