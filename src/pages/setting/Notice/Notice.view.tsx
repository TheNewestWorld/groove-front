import { ArrowIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import SettingList from "../../../components/SettingList";
import { Props as SettingListProps } from "../../../components/SettingList";
import styles from "./Notice.module.scss";

export interface Props {
  noticeList: SettingListProps["list"];
}

const Notice = ({ noticeList }: Props) => {
  return (
    <>
      <Header
        title="공지사항"
        left={<ArrowIcon />}
        onClickLeft={() => alert("TODO")}
      />
      <SettingList classNames={styles.list} list={noticeList} />
    </>
  );
};

export default Notice;
