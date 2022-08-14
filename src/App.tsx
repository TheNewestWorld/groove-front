import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
