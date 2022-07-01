import { useNavigate } from "react-router-dom";
import RoutePath from "../../constants/routePath";

import "./Navigation.scss";

const Navigation = () => {
  const navigation = useNavigate();

  return (
    <div className="navigation">
      <button onClick={() => navigation(RoutePath.home)}>홈</button>
      <button onClick={() => navigation(RoutePath.community)}>커뮤니티</button>
      <button onClick={() => navigation(RoutePath.training)}>트레이닝</button>
      <button onClick={() => navigation(RoutePath.mypage)}>마이페이지</button>
    </div>
  );
};

export default Navigation;
