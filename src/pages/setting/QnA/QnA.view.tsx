import { ArrowIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import SettingList from "../../../components/SettingList";
import { Props as SettingListProps } from "../../../components/SettingList";
import styles from "./QnA.module.scss";

export interface Props {
  qnaList: SettingListProps["list"];
}

const QnAView = ({ qnaList }: Props) => {
  return (
    <>
      <Header
        title="문의하기"
        left={<ArrowIcon />}
        onClickLeft={() => alert("TODO")}
      />
      <SettingList classNames={styles.list} list={qnaList} />
    </>
  );
};

export default QnAView;
