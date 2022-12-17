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
  onProfileClick?: () => void;
}

const MainHeader = ({
  className,
  userImageSrc,
  hasNotification = false,
  onTitleClick,
  onSearchClick,
  onAlarmClick,
  onProfileClick,
}: Props) => {
  return (
    <div className={classnames([styles.container, className])}>
      <AppLogoText onClick={onTitleClick} />
      <div>
        <SearchIcon onClick={onSearchClick} />
        <Notification
          className={styles.alarm}
          hasNotification={hasNotification}
          onClick={onAlarmClick}
        >
          <AlarmIcon />
        </Notification>
        <CircleImage
          className={styles.userImage}
          src={userImageSrc}
          onClick={onProfileClick}
        />
      </div>
    </div>
  );
};

export default MainHeader;
