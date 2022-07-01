import { useNavigate, useParams } from "react-router-dom";
import MyPageView from "./MyPage.view";

const MyPage = () => {
  const { tab } = useParams<{ tab: "recording" | "bookmark" | "training" }>();
  const navigation = useNavigate();

  const onClickTab = (tab: "recording" | "bookmark" | "training") => {
    navigation(`/mypage/${tab}`);
  };

  if (!tab || !["recording", "bookmark", "training"].includes(tab)) {
    return <>잘못된 접근입니다.</>;
  }

  return (
    <div>
      마이페이지입니다.
      <MyPageView tab={tab} onClickTab={onClickTab} />
    </div>
  );
};

export default MyPage;
