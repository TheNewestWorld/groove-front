import { useNavigate, useParams } from "react-router-dom";
import Bookmark from "./components/Bookmark";
import Recording from "./components/Recording";
import Training from "./components/Training";

const MyPage = () => {
  const { tab } = useParams<{ tab: "recording" | "bookmark" | "training" }>();
  const navigation = useNavigate();

  if (!["recording", "bookmark", "training"].includes(tab ?? "")) {
    return <>잘못된 접근입니다.</>;
  }

  return (
    <div>
      마이페이지입니다.
      <div>
        <button
          onClick={() => {
            navigation("/mypage/recording");
          }}
        >
          녹음내역
        </button>
        <button
          onClick={() => {
            navigation("/mypage/bookmark");
          }}
        >
          스크랩
        </button>
        <button
          onClick={() => {
            navigation("/mypage/training");
          }}
        >
          트레이닝
        </button>
      </div>
      {tab === "recording" && <Recording />}
      {tab === "bookmark" && <Bookmark />}
      {tab === "training" && <Training />}
    </div>
  );
};

export default MyPage;
