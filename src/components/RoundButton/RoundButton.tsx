import classnames from "classnames";
import { ButtonHTMLAttributes } from "react";

import "./RoundButton.scss";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorTheme?: "primary" | "secondary" | "dark";
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const RoundButton = ({
  children,
  colorTheme = "primary",
  onClick,
  className,
  ...args
}: Props): React.ReactElement => {
  return (
    <button
      className={classnames(["round-button", colorTheme, className])}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default RoundButton;
