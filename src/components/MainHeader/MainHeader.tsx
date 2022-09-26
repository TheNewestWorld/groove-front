import classnames from "classnames";

import styles from "./MainHeader.module.scss";

import { AlarmIcon, SearchIcon } from "../../assets/icon";
import Notification from "../Notification";

export interface Props {
  className?: string;
  title?: string;
  hasNotification?: boolean;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
  onAlarmClick?: () => void;
}

const MainHeader = ({
  className,
  title,
  hasNotification = false,
  onTitleClick,
  onSearchClick,
  onAlarmClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <span
        className={classnames([title ? styles.notHome : styles.home])}
        onClick={onTitleClick}>
        {/* TODO: GROOVE 이미지 추가되면 변경이 필요해요*/}
        {title ? title : "GROOVE"}
      </span>
      <div>
        <SearchIcon onClick={onSearchClick} />
        <Notification
          className={styles.alarmContainer}
          hasNotification={hasNotification}
          onClick={onAlarmClick}>
          <AlarmIcon />
        </Notification>
      </div>
    </div>
  );
};

export default MainHeader;
