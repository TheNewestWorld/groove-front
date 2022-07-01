import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./constants/routePath";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.home} element={<Home />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
