import classNames from "classnames";
import "./RoundBox.scss";

export interface Props {
  hasShadow: boolean;
  children?: React.ReactNode;
}

const RoundBox = ({
  children,
  hasShadow
}: Props): React.ReactElement => {
  return (
    <div className={classNames(["round-box", hasShadow && "round-box__shadow"])}>
      {children}
    </div>
  );
};

export default RoundBox;
