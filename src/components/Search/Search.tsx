import classnames from "classnames";
import { useState } from "react";
import { CloseIcon, GreyDeleteCircle, SearchIcon } from "../../assets/icon";

import "./Search.scss";

export interface Props {
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  deleteItem: (value: string) => void;
}

const Search = ({ list, onClickCancle, onSubmitSearch, deleteItem }: Props) => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <>
      <div className="search__input">
        <div className="search__input__container">
          <SearchIcon className="search__input__icon" />
          <input
            value={keyword}
            placeholder="검색"
            onChange={(e) => setKeyword(e.target.value)}
          />
          {/* TODO: 삭제 아이콘 클릭 시 뒤로가기 */}
          {keyword.length > 0 && <GreyDeleteCircle />}
        </div>
        <button onClick={onClickCancle}>취소</button>
      </div>
      {list.map(({ title, type, itemList }) => (
        <div className="search__list" key={title}>
          <div className="search__list__title">{title}</div>
          <div className={classnames(["search__list__item", type])}>
            {itemList.map((item) => (
              <div key={item}>
                <span onClick={() => onSubmitSearch(item)}>{item}</span>
                {type === "line" && (
                  <CloseIcon onClick={() => deleteItem(item)} />
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
