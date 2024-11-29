import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderElement from "./components/HeaderElement";
import { mainPage } from "../../pages/home";

const Routes: React.FC = () => {
  return (
    <Router>
      <HeaderElement />
      <Routes>
        <Route path="/" component={mainPage} />
      </Routes>
    </Router>
  );
};

export default Routes;
