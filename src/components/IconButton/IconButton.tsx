import { ButtonHTMLAttributes } from "react";

import './IconButton.scss';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
}

const IconButton = ({ icon, ...options }: props) => {
  return (
    <button className="icon-button" {...options}>
      {icon}
    </button>
  );
};

export default IconButton;