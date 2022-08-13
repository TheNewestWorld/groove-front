import { formatFullDate } from "../../helpers/dateHelper";
import Badge from "./components/Badge";
import "./HistoryItem.scss";

export interface Props {
  imageUrl: string;
  nickname: string;
  date: Date;
  content: string;
  status: "ready" | "done";
}

const HistoryItem = ({ imageUrl, nickname, date, content, status }: Props) => {
  return (
    <div className="history-item">
      {/* TODO: circleImage로 변경 */}
      <img className="history-itme__image" src={imageUrl} alt="" />
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

export default HistoryItem;
