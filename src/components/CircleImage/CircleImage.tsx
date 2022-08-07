import classnames from "classnames";
import { ImgHTMLAttributes } from 'react';

import './CircleImage.scss';

interface props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size: "small" | "medium" | "large";
  fit: "fit-contain" | "fit-cover" | "fit-fill";
  onClick: () => void;
}

const CircleImage = ({
  src,
  size,
  fit,
  onClick
}: props): React.ReactElement => {
  return (
    <div className="circle-image">
      <img className={classnames([
        "circle-image",
        size,
        fit
      ])}
        src={src} onClick={onClick}/>
    </div>
  );
};

export default CircleImage;
