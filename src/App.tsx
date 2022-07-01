import React, { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Navigation from "./components/Navigation";

const Home = lazy(() => import("./pages/Home"));
const MyPage = lazy(() => import("./pages/MyPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.mypage} element={<MyPage />} />
        <Route path={RoutePath.home} element={<Home />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
