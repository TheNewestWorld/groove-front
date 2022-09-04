import styles from "./TrainerDetail.module.scss";

import ContentDivider from "./components/ContentDivider";
import TrainerInfoLayout from "./components/TrainerInfoLayout";
import RoundButton from "../../components/RoundButton";

import TrainerItem, {
  Props as TrainerItemView,
} from "../../components/TrainerItem";
import TrainerInfoItem, {
  Props as TrainerInfoItemView,
} from "./components/TrainerInfoItem";
import TrainingItem, {
  Props as TrainingItemView,
} from "../../components/TrainingItem";
import ReviewItem, {
  Props as ReviewItemView,
} from "../../components/ReviewItem";

import { YellowStartFillIcon } from "../../assets/icon";

export interface Props {
  profile: TrainerItemView;
  introduce: TrainerInfoItemView;
  career: TrainerInfoItemView;
  license: TrainerInfoItemView;
  skill: TrainerInfoItemView;
  trainingList: TrainingItemView[];
  reviewList: ReviewItemView[];
  reviewRating: number;
  onClickHistory: () => void;
  onClickReview: () => void;
  onRequestCoaching: () => void;
}

const TrainerDetailView = ({
  profile,
  introduce,
  career,
  license,
  skill,
  trainingList,
  reviewList,
  reviewRating,
  onClickHistory,
  onClickReview,
  onRequestCoaching,
}: Props) => {
  return (
    <div>
      <TrainerItem {...profile} />
      <ContentDivider />
      <TrainerInfoItem {...introduce} />
      <ContentDivider />
      <TrainerInfoItem {...career} />
      <ContentDivider />
      <TrainerInfoItem {...license} />
      <ContentDivider />
      <TrainerInfoItem {...skill} />
      <ContentDivider />
      <TrainerInfoLayout
        title="코칭 내역"
        type="CLICKABLE"
        onClick={onClickHistory}>
        {trainingList.map((item, index) => (
          <TrainingItem
            key={index}
            className={styles.trainingHistoryItem}
            {...item}
          />
        ))}
      </TrainerInfoLayout>
      <ContentDivider />
      <TrainerInfoLayout
        title="코칭 후기"
        type="CLICKABLE"
        right={
          reviewRating >= 0 &&
          reviewRating <= 5 && (
            <div className={styles.reviewRatingContainer}>
              <YellowStartFillIcon className={styles.reviewRatingIcon} />
              <span className={styles.reviewRatingText}>{reviewRating}</span>
            </div>
          )
        }
        onClick={onClickReview}>
        {reviewList.map((item, index) => (
          <ReviewItem
            key={index}
            className={styles.reviewHistoryItem}
            {...item}
          />
        ))}
      </TrainerInfoLayout>
      <RoundButton text="신청하기" onClick={onRequestCoaching} />
    </div>
  );
  // return (
  //   <></>
  // );
};

export default TrainerDetailView;
