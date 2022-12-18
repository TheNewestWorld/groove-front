import { ArrowIcon } from "../../assets/icon";
import Header from "../Header";
import SettingList from "../SettingList/SettingList";
import { Props as SettingListProps } from "../SettingList";
import styles from "./SettingListForm.module.scss";

export interface Props {
  headerTitle: string;
  settingList: SettingListProps["list"];
  emptyMessage: string;
  onClickBack: () => void;
}

const SettingListForm = ({
  headerTitle,
  settingList,
  emptyMessage,
  onClickBack,
}: Props) => {

  return (
    <>
      <Header
        title={headerTitle}
        left={<ArrowIcon />}
        onClickLeft={onClickBack}
      />
      <SettingList
        classNames={styles.list}
        list={settingList}
        emptyMessage={emptyMessage}
      />
    </>
  );
};

export default SettingListForm;
