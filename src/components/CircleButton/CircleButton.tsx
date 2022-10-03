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
        styles.button,
        shadow && styles.shadow,
        colorTheme === "primary" && styles.primary,
        colorTheme === "secondary" && styles.secondary,
        colorTheme === "dark" && styles.dark,
        colorTheme === "light" && styles.light,
      ])}
    >
      {icon}
    </div>
  );
};

export default CircleButton;
