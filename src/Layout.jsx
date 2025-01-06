// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
