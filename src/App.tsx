import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.entry} element={<Entry />} />
        <Route path={RoutePath.signIn} element={<SignIn />} />
        <Route path={RoutePath.signUp} element={<SignUp />} />
        <Route path={RoutePath.home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
