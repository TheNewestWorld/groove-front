import { useState } from "react";
import useMyPage from "./hooks/useMyPage";
import MyPageView, { Tab } from "./MyPage.view";

const MyPage = () => {
  // TODO: path에 따라서 tab 변환 및 tab 변환 시 path 변환
  const [tab, setTab] = useState<Tab>("RECORD");

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
      tab={tab}
      recordList={recordList}
      likedList={
        // TODO: 로직 훅 안으로 넣기
        likedList?.map(
          ({
            postId,
            userNickname,
            userProfileUri,
            title,
            content,
            likeCount,
            commentCount,
          }) => {
            return {
              id: postId,
              user: userNickname,
              userImageSrc: userProfileUri,
              title,
              description: content,
              likeCount,
              commentCount,
              liked: true, // TODO
            };
          }
        ) ?? []
      }
      writtenList={
        // TODO: 로직 훅 안으로 넣기
        writtenList?.map(
          ({
            postId,
            userNickname,
            userProfileUri,
            title,
            content,
            likeCount,
            commentCount,
          }) => {
            return {
              id: postId,
              user: userNickname,
              userImageSrc: userProfileUri,
              title,
              description: content,
              likeCount,
              commentCount,
              liked: true, // TODO
            };
          }
        ) ?? []
      }
      onChangeTab={(tab: Tab) => setTab(tab)}
      onClickCommunityItem={(id) => {
        // TODO
      }}
      onDeleteRecord={(id) => {
        // TODO
      }}
    />
  );
};

export default MyPage;
