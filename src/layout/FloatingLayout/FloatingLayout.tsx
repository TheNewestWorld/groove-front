import classNames from "classnames";
import "./FloatingLayout.scss";

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

const FloatingLayout = ({ children, className }: Props) => {
  return (
    <div className={classNames(["floating-layout", className])}>{children}</div>
  );
};

export default FloatingLayout;
