import classNames from "classnames";
import { ArrowIcon } from "../../assets/icon";
import "./CategoryLayout.scss";

export interface Props {
  title: string;
  listLength: number;
  activeFilter: string;
  filterList: string[];
  onClickFilter: (filter: string) => void;
  children: React.ReactNode;
}

const CategoryLayout = ({
  title,
  listLength,
  activeFilter,
  filterList,
  onClickFilter,
  children,
}: Props) => {
  return (
    <div className="category-layout">
      <div className="category-layout__header">
        <div className="category-layout__title">
          {title} {listLength}건{/* TODO: 클릭 이벤트 붙이기 */}
          <ArrowIcon className="category-layout__icon" />
        </div>
        {filterList.map((filter) => (
          <div
            key={filter}
            className={classNames([
              "category-layout__filter",
              activeFilter === filter && "active",
            ])}
            onClick={() => onClickFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default CategoryLayout;
