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
          {title} {listLength}건{/* TODO: icon 추가 */}
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
