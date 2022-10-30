import { ArrowIcon, PencilIcon, SettingIcon } from "../../assets/icon";
import CircleImage from "../../components/CircleImage";
import Header from "../../components/Header";
import TabList from "../../components/TabList";
import CommunitySection from "./components/CommunitySection";
import RecordSection from "./components/RecordSection";
import styles from "./MyPage.module.scss";

type CommunityItem = {
  id: number;
  user: string;
  userImageSrc: string;
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  liked: boolean;
};

const TabTitle = {
  RECORD: "녹음내역",
  LIKED: "좋아한 게시물",
  WRITTEN: "작성한 게시물",
};

export interface Props {
  profileImage: string;
  nickname: string;
  tab: "RECORD" | "LIKED" | "WRITTEN";
  recordList: {
    id: number;
    title: string;
    date: Date;
    length: string;
    url: string;
  }[];
  likedList: CommunityItem[];
  writtenList: CommunityItem[];
  onChangeTab: (tab: string) => void;
  onClickCommunityItem: (id: number) => void;
  onDeleteRecord: (id: number) => void;
}

const MyPageView = ({
  profileImage,
  nickname,
  tab,
  recordList,
  likedList,
  writtenList,
  onChangeTab,
  onClickCommunityItem,
  onDeleteRecord,
}: Props) => {
  return (
    <div className={styles.container}>
      <Header
        title="마이페이지"
        left={<ArrowIcon />}
        right={<SettingIcon />}
        onClickLeft={() => alert("TODO")}
        onClickRight={() => alert("TODO")}
      />

      <div className={styles.profile}>
        <CircleImage src={profileImage} className={styles.image} />
        <div className={styles.nickname}>{nickname}</div>
        <PencilIcon className={styles.icon} />
      </div>

      <TabList
        className={styles.tab}
        type="round"
        activeTab={TabTitle[tab]}
        tabList={["녹음내역", "좋아한 게시물", "작성한 게시물"]}
        onClickTab={onChangeTab}
      />

      {tab === "RECORD" && (
        <RecordSection
          className={styles.section}
          recordList={recordList}
          onDelete={onDeleteRecord}
        />
      )}

      {tab === "LIKED" && (
        <CommunitySection
          className={styles.section}
          communityList={likedList}
          onClick={onClickCommunityItem}
        />
      )}

      {tab === "WRITTEN" && (
        <CommunitySection
          className={styles.section}
          communityList={writtenList}
          onClick={onClickCommunityItem}
        />
      )}
    </div>
  );
};

export default MyPageView;
