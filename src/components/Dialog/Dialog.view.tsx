import classNames from "classnames";
import "./Dialog.scss";

export interface Props {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const DialogView = ({ title, icon, children, className }: Props) => {
  return (
    <div className={classNames(["dialog__background", className])}>
      <div className="dialog__container">
        <div className="dialog__title">
          {icon}
          {title}
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    </div>
  );
};

export default DialogView;
