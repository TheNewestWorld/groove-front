import classNames from "classnames";
import { formatFullDate } from "../../helpers/dateHelper";
import Score from "../Score";
import "./ReviewItem.scss";

export interface Props {
  imageUrl: string;
  nickname: string;
  date: Date;
  content: string;
  score: number;
  className?: string;
}

const ReviewItem = ({
  imageUrl,
  nickname,
  date,
  content,
  score,
  className,
}: Props) => {
  return (
    <div className={classNames(["review-item", className])}>
      {/* TODO: circleImage로 변경 */}
      <img className="review-itme__image" src={imageUrl} alt="" />
      <div className="review-item__flex">
        <div className="review-item__information">
          <div className="review-item__nickname">{nickname}</div>
          <div className="review-item__date">{formatFullDate(date)}</div>
          <Score className="review-item__star" score={score} />
        </div>
        <div className="review-item__content">{content}</div>
      </div>
    </div>
  );
};

export default ReviewItem;
