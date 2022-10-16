import classNames from "classnames";
import { formatFullDate } from "../../helpers/dateHelper";

import CircleImage from "../CircleImage";
import "./ContentHeader.scss";

export interface Props {
  title: string;
  profileImage: string;
  nickname: string;
  date: Date;
  onClickProfile?: () => void;
  className?: string;
}

const ContentHeader = ({
  title,
  profileImage,
  nickname,
  date,
  onClickProfile,
  className,
}: Props): React.ReactElement => {
  return (
    <div className={classNames(["content-header", className])}>
      <div className="content-header__title">{title}</div>
      <div className="content-header__flex">
        <CircleImage src={profileImage} onClick={onClickProfile} />
        <div className="content-header__nickname" onClick={onClickProfile}>
          {nickname}
        </div>
        <div className="content-header__date">{formatFullDate(date)}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
