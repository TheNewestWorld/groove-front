import classnames from "classnames";

import styles from "./MainHeader.module.scss";

import { AlarmIcon, SearchIcon } from "../../assets/icon";
import { AppLogoText } from "../../assets/image";
import Notification from "../Notification";
import CircleImage from "../CircleImage";

export interface Props {
  className?: string;
  userImageSrc: string;
  hasNotification?: boolean;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
  onAlarmClick?: () => void;
}

const MainHeader = ({
  className,
  userImageSrc,
  hasNotification = false,
  onTitleClick,
  onSearchClick,
  onAlarmClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <AppLogoText onClick={onTitleClick} />
      <div>
        <SearchIcon onClick={onSearchClick} />
        <Notification
          className={styles.alarmContainer}
          hasNotification={hasNotification}
          onClick={onAlarmClick}>
          <AlarmIcon />
        </Notification>
        <CircleImage className={styles.userImageContainer} src={userImageSrc} />
      </div>
    </div>
  );
};

export default MainHeader;
