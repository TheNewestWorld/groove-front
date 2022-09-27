import classNames from "classnames";
import RoundButton from "../RoundButton";
import styles from "./Form.module.scss";

export interface Props {
  title?: string;
  subTitle?: string;
  align?: "left" | "right" | "center";
  buttonText?: string;
  buttonColorTheme?: "primary" | "secondary" | "dark";
  isDisabledButton?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Form = ({
  title,
  subTitle,
  align = "left",
  buttonText,
  buttonColorTheme = "primary",
  isDisabledButton,
  onClick,
  children,
}: Props) => {
  return (
    <div className={classNames([styles.container, styles[align]])}>
      {title && <div className={styles.title}>{title}</div>}
      {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
      {children}
      {buttonText && (
        <RoundButton
          className={styles.button}
          onClick={onClick}
          disabled={isDisabledButton}
          colorTheme={buttonColorTheme}
        >
          {buttonText}
        </RoundButton>
      )}
    </div>
  );
};

export default Form;
