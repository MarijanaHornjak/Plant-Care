import React from "react";
import Header from "../../components/Header/Header";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
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
