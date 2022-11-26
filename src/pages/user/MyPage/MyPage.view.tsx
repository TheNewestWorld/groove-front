import { ArrowIcon, PencilIcon, SettingIcon } from "../../../assets/icon";
import CircleImage from "../../../components/CircleImage";
import EmptyPage from "../../../components/EmptyPage";
import Header from "../../../components/Header";
import TabList from "../../../components/TabList";
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

export type Tab = "RECORD" | "LIKED" | "WRITTEN";

export type TabLabel = "녹음내역" | "좋아한 게시물" | "작성한 게시물";

const TabTitle: { id: Tab; label: TabLabel }[] = [
  { id: "RECORD", label: "녹음내역" },
  { id: "LIKED", label: "좋아한 게시물" },
  { id: "WRITTEN", label: "작성한 게시물" },
];

export interface Props {
  profileImage: string;
  nickname: string;
  currentTab: Tab;
  recordList: {
    id: number;
    title: string;
    date: Date;
    length: string;
    url: string;
  }[];
  likedList: CommunityItem[];
  writtenList: CommunityItem[];
  onChangeTab: (tab: Tab) => void;
  onClickCommunityItem: (id: number) => void;
  onDeleteRecord: (id: number) => void;
}

const MyPageView = ({
  profileImage,
  nickname,
  currentTab,
  recordList,
  likedList,
  writtenList,
  onChangeTab,
  onClickCommunityItem,
  onDeleteRecord,
}: Props) => {
  const activeTab = TabTitle.filter((tab) => tab.id === currentTab)[0].label;

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
        activeTab={activeTab}
        tabList={["녹음내역", "좋아한 게시물", "작성한 게시물"]}
        onClickTab={(newTab) =>
          onChangeTab(TabTitle.filter((tab) => tab.label === newTab)[0].id)
        }
      />

      {currentTab === "RECORD" &&
        (recordList.length === 0 ? (
          <EmptyPage title="녹음 내용이 없어요." className={styles.empty} />
        ) : (
          <RecordSection
            className={styles.section}
            recordList={recordList}
            onDelete={onDeleteRecord}
          />
        ))}

      {currentTab === "LIKED" &&
        (likedList.length === 0 ? (
          <EmptyPage title="좋아한 게시물이 없어요." className={styles.empty} />
        ) : (
          <CommunitySection
            className={styles.section}
            communityList={likedList}
            onClick={onClickCommunityItem}
          />
        ))}

      {currentTab === "WRITTEN" &&
        (writtenList.length === 0 ? (
          <EmptyPage title="작성한 게시물이 없어요." className={styles.empty} />
        ) : (
          <CommunitySection
            className={styles.section}
            communityList={writtenList}
            onClick={onClickCommunityItem}
          />
        ))}
      {/* TODO: 리스트 마지막에 도착 시 추가 데이터 요청 */}
    </div>
  );
};

export default MyPageView;
