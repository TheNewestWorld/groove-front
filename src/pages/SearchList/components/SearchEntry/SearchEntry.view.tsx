import classnames from "classnames";
import { Fragment } from "react";
import { CloseIcon } from "../../../../assets/icon";
import SearchInput from "../../../../components/SearchInput";

import styles from "./SearchEntry.module.scss";

export interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  deleteItem: (value: string, index?: number) => void;
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
  showList: boolean;
}

const SearchEntry = ({
  keyword,
  setKeyword,
  list,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
  showList,
}: Props) => {
  console.log("showList", showList, list);
  return (
    <>
      <SearchInput
        keyword={keyword}
        setKeyword={setKeyword}
        onClickCancle={onClickCancle}
        onSubmitSearch={onSubmitSearch}
      />
      {showList && (
        <>
          {list.map(({ title, type, itemList }, index) => (
            <Fragment key={`${title}-${type}`}>
              {itemList.length > 0 && (
                <div className={styles.list} key={index}>
                  <div className={styles.title}>{title}</div>
                  <div className={classnames([styles.item, styles[type]])}>
                    {itemList.map((item, index) => (
                      <div key={`${item}-${index}`}>
                        <span onClick={() => onSubmitSearch(item)}>{item}</span>
                        {type === "line" && (
                          <CloseIcon onClick={() => deleteItem(item, index)} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default SearchEntry;
