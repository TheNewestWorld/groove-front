import TrainingItem, {
  Props as TrainingItemView,
} from "../../components/TrainingItem";
import TopDownFilter from "../../components/TopDownFilter";

import "./TrainingHistory.scss";

export interface Props {
  activeFilter: string;
  filterList: string[];
  onChangeFilter: (filter: string) => void;
  trainingList: TrainingItemView[];
}

const TrainingHistoryView = ({
  activeFilter,
  filterList,
  onChangeFilter,
  trainingList,
}: Props) => {
  return (
    <div className="training-history">
      <TopDownFilter
        className="training-history__filter"
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {trainingList.map((item, index) => (
        // TODO: key값 id로 수정
        <TrainingItem
          key={index}
          className="training-history__item"
          {...item}
        />
      ))}
    </div>
  );
};

export default TrainingHistoryView;
