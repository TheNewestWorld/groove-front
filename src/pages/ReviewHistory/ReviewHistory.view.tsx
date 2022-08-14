import ReviewItem, {
  Props as ReviewItemView,
} from "../../components/ReviewItem";
import TopDownFilter from "../../components/TopDownFilter";

import "./ReviewHistory.scss";

export interface Props {
  activeFilter: string;
  filterList: string[];
  onChangeFilter: (filter: string) => void;
  reviewList: ReviewItemView[];
}

const ReviewHistoryView = ({
  activeFilter,
  filterList,
  onChangeFilter,
  reviewList,
}: Props) => {
  return (
    <div className="review-history">
      <TopDownFilter
        className="review-history__filter"
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {reviewList.map((item, index) => (
        // TODO: key값 id로 수정
        <ReviewItem key={index} className="review-history__item" {...item} />
      ))}
    </div>
  );
};

export default ReviewHistoryView;
