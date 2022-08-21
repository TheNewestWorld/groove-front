import classNames from "classnames";
import "./RoundBox.scss";

export interface Props {
  hasShadow?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const RoundBox = ({
  children,
  hasShadow = false,
  className,
}: Props): React.ReactElement => {
  return (
    <div
      className={classNames([
        "round-box",
        hasShadow && "round-box__shadow",
        className,
      ])}>
      {children}
    </div>
  );
};

export default RoundBox;
