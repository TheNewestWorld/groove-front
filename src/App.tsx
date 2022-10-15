import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FindPassword from "./pages/FindPassword";
import ResetPassword from "./pages/ResetPassword";
import {
  GlobalApiErrorBoundary,
  GlobalErrorBoundary,
} from "./common/errors/boundaries";
import { QueryClientProvider } from "react-query";
import { getGlobalQueryClient } from "./common/configs";

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
            <Route path={RoutePath.home} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalApiErrorBoundary>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
