import { ImgHTMLAttributes } from 'react';

import './CircleImage.scss';

interface props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  onClick?: () => void;
}

const CircleImage = ({
  src,
  className,
  onClick,
  ...args
}: props): React.ReactElement => {
  return (
    <div className="circle-image">
      <img {...args} className={className}
        src={src} onClick={onClick}/>
    </div>
  );
};

export default CircleImage;
