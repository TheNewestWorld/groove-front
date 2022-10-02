import classnames from "classnames";

import styles from "./Notification.module.scss";

export interface Props {
  className?: string;
  hasNotification?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Notification = ({
  className,
  hasNotification = false,
  children,
  onClick,
}: Props) => {
  return (
    <div
      className={classnames([styles.container, className])}
      onClick={onClick}>
      {children}
      {hasNotification && <div className={styles.notification} />}
    </div>
  );
};

export default Notification;
