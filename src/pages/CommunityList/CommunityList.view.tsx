import CommunityItem, {
  Props as CommunityItemView,
} from "../../components/CommunityItem";
import TopDownFilter from "../../components/TopDownFilter";

import "./CommunityList.scss";

export interface Props {
  activeFilter: string;
  filterList: string[];
  onChangeFilter: (filter: string) => void;
  communityList: CommunityItemView[];
}

const CommunityListView = ({
  activeFilter,
  filterList,
  onChangeFilter,
  communityList,
}: Props) => {
  return (
    <div className="container">
      <TopDownFilter
        className="filter"
        activeFilter={activeFilter}
        filterList={filterList}
        onClickFilter={onChangeFilter}
      />
      {communityList.map((item, index) => (
        <div className="item">
          <CommunityItem key={index} {...item} />
        </div>
      ))}
    </div>
  );
};

export default CommunityListView;
