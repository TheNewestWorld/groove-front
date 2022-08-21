import classNames from "classnames";
import { formatFullDate } from "../../helpers/dateHelper";

import CircleImage from "../CircleImage";
import "./ContentHeader.scss";

export interface Props {
  title: string;
  imageUrl: string;
  nickname: string;
  date: Date;
  onProfileClick?: () => void;
  className?: string;
}

const ContentHeader = ({
  title,
  imageUrl,
  nickname,
  date,
  onProfileClick,
  className
}: Props): React.ReactElement => {
  return (
    <div className={classNames(["content-header", className])}>
      <div className="content-header__title">{title}</div>
      <div className="content-header__flex">
        <CircleImage src={imageUrl} onClick={onProfileClick}/>
        <div className="content-header__nickname" onClick={onProfileClick}>{nickname}</div>
        <div className="content-header__date">{formatFullDate(date)}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
