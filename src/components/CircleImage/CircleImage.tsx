import classnames from "classnames";
import { ImgHTMLAttributes } from 'react';

import './CircleImage.scss';

interface props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  classname?: string;
  onClick?: () => void;
}

const CircleImage = ({
  src,
  classname,
  onClick,
  ...args
}: props): React.ReactElement => {
  return (
    <div className="circle-image">
      <img {...args} className={classnames([
        "circle-image",
        classname
      ])}
        src={src} onClick={onClick}/>
    </div>
  );
};

export default CircleImage;
