import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import useMyPage from "./hooks/useMyPage";
import MyPageView, { Tab } from "./MyPage.view";

const MyPage = () => {
  // TODO: path에 따라서 tab 변환 및 tab 변환 시 path 변환
  const [tab, setTab] = useState<Tab>("RECORD");
  const navigation = useNavigate();

  const {
    isLoading,
    isError,
    profileImage,
    nickname,
    recordList,
    likedList,
    writtenList,
  } = useMyPage();

  if (isLoading) {
    // TODO: 스켈레톤 추가
    return <>Loading...</>;
  }

  if (isError) {
    // TODO: 에러 처리
    return <>에러가 발생하였습니다.</>;
  }

  // TODO: floating button 추가
  return (
    <MyPageView
      profileImage={profileImage}
      nickname={nickname}
      currentTab={tab}
      recordList={recordList}
      likedList={likedList}
      writtenList={writtenList}
      onChangeTab={(tab: Tab) => setTab(tab)}
      onClickCommunityItem={(id) =>
        navigation(BuildPaths.communityDetail(String(id)))
      }
      onDeleteRecord={(id) => {
        // TODO
      }}
      goToBack={() => navigation(-1)}
      onClickSetting={() => navigation(BuildPaths.setting())}
      onClickEdit={() => navigation(BuildPaths.myProfile())}
    />
  );
};

export default MyPage;
