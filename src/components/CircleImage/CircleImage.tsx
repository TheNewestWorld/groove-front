import { ImgHTMLAttributes } from "react";

import "./CircleImage.scss";

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  onClick?: () => void;
}

const CircleImage = ({
  src,
  className,
  onClick,
  ...args
}: Props): React.ReactElement => {
  return (
    <div className="circle-image">
      <img {...args} className={className}
        src={src} onClick={onClick}/>
    </div>
  );
};

export default CircleImage;
