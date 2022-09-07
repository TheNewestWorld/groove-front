import classnames from "classnames";

import styles from "./MainHeader.module.scss";

import { AlarmIcon, SearchIcon } from "../../assets/icon";

export interface Props {
  className?: string;
  title?: string;
  notificationCount?: number;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
  onAlarmClick?: () => void;
}

const MainHeader = ({
  className,
  title,
  notificationCount = 0,
  onTitleClick,
  onSearchClick,
  onAlarmClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <span
        className={classnames([title ? styles.notHome : styles.home])}
        onClick={onTitleClick}>
        {title ? title : "GROOVE"}
      </span>
      <div>
        <SearchIcon onClick={onSearchClick} />
        <div className={styles.alarmContainer} onClick={onAlarmClick}>
          <AlarmIcon />
          {notificationCount > 0 && (
            <span className={styles.notification}>{notificationCount}+</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
