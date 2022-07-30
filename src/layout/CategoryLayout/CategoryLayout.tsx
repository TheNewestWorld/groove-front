import classNames from "classnames";
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
          {title} {listLength}
        </div>
        {filterList.map((filter) => (
          // TODO: RoundBoardButton 으로 변경
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
