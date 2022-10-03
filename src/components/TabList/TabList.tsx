import classnames from "classnames";
import "./TabList.scss";

export interface Props {
  type: "underline" | "round";
  activeTab: string;
  tabList: string[];
  onClickTab: (tab: string) => void;
  className?: string;
}

const TabList = ({
  activeTab,
  tabList,
  type,
  onClickTab,
  className,
}: Props) => {
  return (
    <div className={classnames(["tab-list", type, className])}>
      {tabList.map(tab => (
        <div
          className={classnames([
            "tab-list__item",
            type,
            activeTab === tab && "active",
          ])}
          onClick={() => onClickTab(tab)}>
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabList;
