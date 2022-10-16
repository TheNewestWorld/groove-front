import classnames from "classnames";
import { CloseIcon } from "../../../../assets/icon";
import SearchInput from "../../../../components/SearchInput";

import styles from "./SearchEntry.module.scss";

export interface Props {
  list: { title: string; type: "tag" | "line"; itemList: string[] }[];
  deleteItem: (value: string) => void;
  onClickCancle: () => void;
  onSubmitSearch: (value: string) => void;
}

const SearchEntry = ({
  list,
  deleteItem,
  onClickCancle,
  onSubmitSearch,
}: Props) => {
  return (
    <SearchInput onClickCancle={onClickCancle} onSubmitSearch={onSubmitSearch}>
      {list.map(({ title, type, itemList }) => (
        <div className={styles.list} key={title}>
          <div className={styles.title}>{title}</div>
          <div className={classnames([styles.item, styles[type]])}>
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
    </SearchInput>
  );
};

export default SearchEntry;
