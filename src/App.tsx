import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import {
  GlobalApiErrorBoundary,
  GlobalErrorBoundary,
} from "./common/errors/boundaries";
import { QueryClientProvider } from "react-query";
import { getGlobalQueryClient } from "./common/configs/query";
import { lazy } from "react";

const NotFound = lazy(() => import("./pages/NotFound"));
const Entry = lazy(() => import("./pages/Entry"));
const SignIn = lazy(() => import("./pages/user/SignIn"));
const SignUp = lazy(() => import("./pages/user/SignUp"));
const FindPassword = lazy(() => import("./pages/user/FindPassword"));
const ResetPassword = lazy(() => import("./pages/user/ResetPassword"));
const ActiveUser = lazy(() => import("./pages/user/ActiveUser"));
const CommunityList = lazy(() => import("./pages/community/CommunityList"));
const CommunityNew = lazy(() => import("./pages/community/CommunityNew"));
const CommunityEdit = lazy(() => import("./pages/community/CommunityEdit"));
const CommunityCommentList = lazy(
  () => import("./pages/community/CommunityCommentList")
);
const CommunityDetail = lazy(() => import("./pages/community/CommunityDetail"));
const MyPage = lazy(() => import("./pages/user/MyPage"));
const EditUserProfile = lazy(() => import("./pages/user/EditUserProfile"));
const SearchList = lazy(() => import("./pages/SearchList"));
const Setting = lazy(() => import("./pages/setting/Setting"));
const Notice = lazy(() => import("./pages/setting/Notice"));
const NoticeDetail = lazy(() => import("./pages/setting/NoticeDetail"));
const QnA = lazy(() => import("./pages/setting/QnA"));
const QnADetail = lazy(() => import("./pages/setting/QnADetail"));
const VocForm = lazy(() => import("./pages/setting/VocForm"));

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
            <Route path={RoutePath.activeUser} element={<ActiveUser />} />
            <Route path={RoutePath.communityHome} element={<CommunityList />} />
            <Route path={RoutePath.communityNew} element={<CommunityNew />} />
            <Route path={RoutePath.communityEdit} element={<CommunityEdit />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalApiErrorBoundary>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
