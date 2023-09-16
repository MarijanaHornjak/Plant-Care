import React from "react";
import Header from "../../components/Header/Header";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
