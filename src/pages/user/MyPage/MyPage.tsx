import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon, SettingIcon } from "../../../assets/icon";
import BuildPaths from "../../../common/paths";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import FloatingLayout from "../../../layout/FloatingLayout";
import useMyPage from "./hooks/useMyPage";
import MyPageView, { Tab } from "./MyPage.view";
import AudioRecorder from "./components/AudioRecorder";
import { deleteRecord, postRecord } from "../../../common/apis/records";

const MyPage = () => {
  const { tab } = useParams<{ tab: Tab }>();
  const navigation = useNavigate();

  const {
    isLoading,
    isError,
    profileImage,
    nickname,
    recordList,
    likedList,
    writtenList,
    hasNextWrittenPage,
    fetchNextWrittenPage,
    isFetchingNextWrittenPage,
    hasNextLikedPage,
    fetchNextLikedPage,
    isFetchingNextLikedPage,
    hasNextRecordPage,
    fetchNextRecordPage,
    isFetchingNextRecordPage,
  } = useMyPage();

  if (isLoading || !tab) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header
        title="마이페이지"
        left={<ArrowIcon />}
        right={<SettingIcon />}
        onClickLeft={() => navigation(BuildPaths.communityHome("전체 게시물"))}
        onClickRight={() => navigation(BuildPaths.setting())}
      />

      <MyPageView
        profileImage={profileImage}
        nickname={nickname}
        currentTab={tab}
        recordList={recordList}
        likedList={likedList}
        writtenList={writtenList}
        onChangeTab={(tab: Tab) =>
          navigation(BuildPaths.mypage(tab), { replace: true })
        }
        onClickCommunityItem={(id: number) =>
          navigation(BuildPaths.communityDetail(String(id)))
        }
        onDeleteRecord={(id: number) => {
          deleteRecord({ recordId: id });
        }}
        onClickEdit={() => navigation(BuildPaths.myProfile())}
        hasNextWrittenPage={hasNextWrittenPage}
        fetchNextWrittenPage={fetchNextWrittenPage}
        isFetchingNextWrittenPage={isFetchingNextWrittenPage}
        hasNextLikedPage={hasNextLikedPage}
        fetchNextLikedPage={fetchNextLikedPage}
        isFetchingNextLikedPage={isFetchingNextLikedPage}
        hasNextRecordPage={hasNextRecordPage}
        fetchNextRecordPage={fetchNextRecordPage}
        isFetchingNextRecordPage={isFetchingNextRecordPage}
      />

      <FloatingLayout>
        <AudioRecorder
          onRecordingComplete={(audio: Blob) => {
            postRecord({ record: audio });
          }}
        />
      </FloatingLayout>
    </>
  );
};

export default MyPage;
