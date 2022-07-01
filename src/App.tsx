import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path={RoutePath.home} element={<Home />} />
    </Routes>
  );
}

export default App;
