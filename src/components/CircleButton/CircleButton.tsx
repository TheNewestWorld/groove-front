import classnames from "classnames";
import styles from "./CircleButton.module.scss";

export interface Props {
  className?: string;
  icon?: React.ReactNode;
  shadow?: boolean;
  colorTheme?: "primary" | "secondary" | "dark" | "light";
}

const CircleButton = ({
  className,
  icon,
  shadow = false,
  colorTheme = "light",
}: Props) => {
  return (
    <div
      className={classnames([
        className,
        styles.container,
        shadow && styles.shadow,
        styles[colorTheme],
      ])}
    >
      {icon}
    </div>
  );
};

export default CircleButton;
