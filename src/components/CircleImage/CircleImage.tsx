import classnames from "classnames";
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
    <div className={classnames(["circle-image", className])}>
      <img src={src} onClick={onClick} {...args} />
    </div>
  );
};

export default CircleImage;
