import classnames from "classnames";
import "./TabList.scss";

export interface Props {
  type: "underline" | "round";
  activeTab: string;
  tabList: string[];
  onClickTab: (tab: string) => void;
}

const TabList = ({ activeTab, tabList, type, onClickTab }: Props) => {
  return (
    <div className={classnames(["tab-list", type])}>
      {tabList.map((tab) => (
        <div
          className={classnames([
            "tab-list__item",
            type,
            activeTab === tab && "active",
          ])}
          onClick={() => onClickTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabList;
