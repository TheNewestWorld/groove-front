import { ArrowIcon } from "../../../assets/icon";
import Header from "../../../components/Header";
import SettingList from "../../../components/SettingList";
import styles from "./Setting.module.scss";

const Setting = () => {
  return (
    <>
      <Header
        title="설정"
        left={<ArrowIcon />}
        onClickLeft={() => alert("TODO")}
      />
      <SettingList
        classNames={styles.list}
        list={[
          { title: "공지사항", onClick: () => alert("TODO") },
          { title: "문의하기", onClick: () => alert("TODO") },
          { title: "VOC", onClick: () => alert("TODO") },
          { title: "로그아웃", onClick: () => alert("TODO") },
          { title: "회원탈퇴", onClick: () => alert("TODO") },
        ]}
      />
    </>
  );
};

export default Setting;
