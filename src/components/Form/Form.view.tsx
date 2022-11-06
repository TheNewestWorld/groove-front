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

/**
 * NOTE: 이 컴포넌트는 로그인/회원가입 등에서만 사용하기 위한 것 입니다.
 * 전체적인 레이아웃을 적용했기에 다른 부분에서 사용을 지양합니다.
 */
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
