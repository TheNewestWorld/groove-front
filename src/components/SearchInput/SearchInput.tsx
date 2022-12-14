import { useState } from "react";
import { GreyDeleteCircle, SearchIcon } from "../../assets/icon";

import "./SearchInput.scss";

export interface Props {
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  children?: React.ReactNode;
}

const SearchInput = ({ children, onSubmitSearch, onClickCancle }: Props) => {
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
      {children}
    </>
  );
};

export default SearchInput;
