import React from "react";
import Bookmark from "./components/Bookmark";
import Recording from "./components/Recording";
import TabGroup from "./components/TabGroup";
import Training from "./components/Training";

interface Props {
  tab: "recording" | "bookmark" | "training";
  onClickTab: (tab: "recording" | "bookmark" | "training") => void;
}

const MyPageView = ({ tab, onClickTab }: Props) => {
  return (
    <>
      {/* TODO: 헤더 추가 */}
      <img alt="프로필 이미지" />
      <TabGroup onClickTab={onClickTab} />
      {tab === "recording" && <Recording />}
      {tab === "bookmark" && <Bookmark />}
      {tab === "training" && <Training />}
    </>
  );
};

export default MyPageView;
