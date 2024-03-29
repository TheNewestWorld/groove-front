import { useNavigate } from "react-router-dom";
import {
  CommunityActiveIcon,
  CommunityInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  MyPageActiveIcon,
  MyPageInactiveIcon,
  TrainingActiveIcon,
  TrainingInactiveIcon,
} from "../../assets/icon";
import RoutePath from "../../constants/routePath";

import "./Navigation.scss";

export interface Props {
  current: "HOME" | "COMMUNITY" | "TRAINING" | "MYPAGE";
}

const Navigation = ({ current }: Props) => {
  const navigation = useNavigate();

  return (
    <div className="navigation">
      <button
        className={current === "HOME" ? "blue" : ""}
        onClick={() => navigation(RoutePath.home)}
      >
        {current === "HOME" ? <HomeActiveIcon /> : <HomeInactiveIcon />}
        <br />홈
      </button>
      <button
        className={current === "COMMUNITY" ? "blue" : ""}
        onClick={() => navigation(RoutePath.communityHome)}
      >
        {current === "COMMUNITY" ? (
          <CommunityActiveIcon />
        ) : (
          <CommunityInactiveIcon />
        )}
        <br />
        커뮤니티
      </button>
      {/* TODO: 추후 추가 */}
      {/* <button
        className={current === "TRAINING" ? "blue" : ""}
        onClick={() => navigation(RoutePath.training)}
      >
        {current === "TRAINING" ? (
          <TrainingActiveIcon />
        ) : (
          <TrainingInactiveIcon />
        )}
        <br />
        트레이닝
      </button> */}
      <button
        className={current === "MYPAGE" ? "blue" : ""}
        onClick={() => navigation(RoutePath.mypage)}
      >
        {current === "MYPAGE" ? <MyPageActiveIcon /> : <MyPageInactiveIcon />}
        <br />
        마이페이지
      </button>
    </div>
  );
};

export default Navigation;
