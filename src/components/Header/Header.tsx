import './Header.scss';

interface props { 
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Header = ({
  title,
  left,
  right,
}: props): React.ReactElement => {
  return (
    <header className='header'>
      <div>{left}</div>
      <div className='header__title'>{title}</div>
      <div>{right}</div>
    </header>    
  );
}

export default Header;