import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import {
  GlobalApiErrorBoundary,
  GlobalErrorBoundary,
} from "./common/errors/boundaries";
import { QueryClientProvider } from "react-query";
import { getGlobalQueryClient } from "./common/configs/query";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Entry from "./pages/Entry";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import FindPassword from "./pages/user/FindPassword";
import ResetPassword from "./pages/user/ResetPassword";
import CommunityList from "./pages/community/CommunityList";
import CommunityForm from "./pages/community/CommunityForm";
import CommunityCommentList from "./pages/community/CommunityCommentList";
import CommunityDetail from "./pages/community/CommunityDetail";
import MyPage from "./pages/user/MyPage";
import EditUserProfile from "./pages/EditUserProfile";
import SearchList from "./pages/SearchList";
import Setting from "./pages/setting/Setting";
import Notice from "./pages/setting/Notice";
import NoticeDetail from "./pages/setting/NoticeDetail";
import QnA from "./pages/setting/QnA";
import QnADetail from "./pages/setting/QnADetail";
import VocForm from "./pages/setting/VocForm";

function App() {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={getGlobalQueryClient()}>
        <GlobalApiErrorBoundary>
          <Routes>
            <Route path={RoutePath.entry} element={<Entry />} />
            <Route path={RoutePath.signIn} element={<SignIn />} />
            <Route path={RoutePath.signUp} element={<SignUp />} />
            <Route path={RoutePath.findPassword} element={<FindPassword />} />
            <Route path={RoutePath.resetPassword} element={<ResetPassword />} />
            <Route path={RoutePath.communityHome} element={<CommunityList />} />
            <Route path={RoutePath.communityForm} element={<CommunityForm />} />
            <Route
              path={RoutePath.communityComment}
              element={<CommunityCommentList />}
            />
            <Route
              path={RoutePath.communityDetail}
              element={<CommunityDetail />}
            />
            <Route path={RoutePath.mypage} element={<MyPage />} />
            <Route path={RoutePath.myProfile} element={<EditUserProfile />} />
            <Route path={RoutePath.search} element={<SearchList />} />
            <Route path={RoutePath.setting} element={<Setting />} />
            <Route path={RoutePath.noticeList} element={<Notice />} />
            <Route path={RoutePath.noticeDetail} element={<NoticeDetail />} />
            <Route path={RoutePath.qnaList} element={<QnA />} />
            <Route path={RoutePath.qnaDetail} element={<QnADetail />} />
            <Route path={RoutePath.vocForm} element={<VocForm />} />
            <Route path={RoutePath.home} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalApiErrorBoundary>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
