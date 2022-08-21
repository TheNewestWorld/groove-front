import classnames from "classnames";
import { ButtonHTMLAttributes } from "react";

import "./RoundButton.scss";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  colorTheme?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const RoundButton = ({
  text,
  colorTheme = "primary",
  onClick,
  className,
  ...args
}: Props): React.ReactElement => {
  return (
    <button
      className={classnames(["round-button", colorTheme, className])}
      onClick={onClick}
      {...args}>
      {text}
    </button>
  );
};

export default RoundButton;
