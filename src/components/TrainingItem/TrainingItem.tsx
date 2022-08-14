import classNames from "classnames";
import { formatFullDate } from "../../helpers/dateHelper";
import CircleImage from "../CircleImage";
import Badge from "./components/Badge";
import "./TrainingItem.scss";

export interface Props {
  imageUrl: string;
  nickname: string;
  date: Date;
  content: string;
  status: "ready" | "done";
  className?: string;
}

const TrainingItem = ({
  imageUrl,
  nickname,
  date,
  content,
  status,
  className,
}: Props) => {
  return (
    <div className={classNames(["history-item", className])}>
      <CircleImage className="history-item__image" src={imageUrl} />
      <div className="history-item__flex">
        <div className="history-item__information">
          <div className="history-item__nickname">{nickname}</div>
          <div className="history-item__date">{formatFullDate(date)}</div>
        </div>
        <div className="history-item__content">{content}</div>
      </div>
      <Badge status={status} />
    </div>
  );
};

export default TrainingItem;
