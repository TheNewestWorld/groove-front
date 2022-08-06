import classnames from "classnames";

import "./Search.scss";

export interface Props {
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  deleteItem: (value: string) => void;
}

const Search = ({ list, onClickCancle, onSubmitSearch, deleteItem }: Props) => {
  return (
    <>
      <div className="search__input">
        <div className="search__input__container">
          {/* TODO: 아이콘 */}
          <span>🔍</span>
          <input placeholder="검색" />
        </div>
        <button onClick={onClickCancle}>취소</button>
      </div>
      {list.map(({ title, type, itemList }) => (
        <div className="search__list">
          <div className="search__list__title">{title}</div>
          <div className={classnames(["search__list__item", type])}>
            {itemList.map((item) => (
              <div>
                <span onClick={() => onSubmitSearch(item)}>{item}</span>
                {/* TODO: Icon 으로 변경 */}
                {type === "line" && (
                  <span onClick={() => deleteItem(item)}>X</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Search;
