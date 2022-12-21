import { GreyDeleteCircle, SearchIcon } from "../../assets/icon";

import "./SearchInput.scss";

export interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
}

const SearchInput = ({
  keyword,
  setKeyword,
  onSubmitSearch,
  onClickCancle,
}: Props) => {
  return (
    <div className="search__input">
      <div className="search__input__container">
        <SearchIcon className="search__input__icon" />
        <input
          value={keyword}
          placeholder="검색"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onSubmitSearch(keyword);
            }
          }}
        />
        {keyword.length > 0 && (
          <GreyDeleteCircle onClick={() => setKeyword("")} />
        )}
      </div>
      <button onClick={onClickCancle}>취소</button>
    </div>
  );
};

export default SearchInput;
