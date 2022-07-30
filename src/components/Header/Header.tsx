import './Header.scss';

interface props { 
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({
  title,
  left,
  right,
  onLeftClick,
  onRightClick
}: props): React.ReactElement => {
  return (
    <header className='header'>
      <div onClick={onLeftClick}>{left}</div>
      <div className='header__title'>{title}</div>
      <div onClick={onRightClick}>{right}</div>
    </header>    
  );
}

export default Header;