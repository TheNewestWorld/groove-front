import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon, SettingIcon } from "../../../assets/icon";
import BuildPaths from "../../../common/paths";
import Error from "../../../components/Error";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import useMyPage from "./hooks/useMyPage";
import MyPageView, { Tab } from "./MyPage.view";

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

  // TODO: floating button 추가
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
        onDeleteRecord={id => {
          // TODO
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
    </>
  );
};

export default MyPage;
