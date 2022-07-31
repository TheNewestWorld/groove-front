import { ButtonHTMLAttributes } from "react";

import './IconButton.scss';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt: string;
}

const IconButton = ({
  src,
  alt,
  ...options
}: props) => {
  return (
    <button className="icon-button" {...options}>
      <img src={src} alt={alt}/>
    </button>
  );
}

export default IconButton;