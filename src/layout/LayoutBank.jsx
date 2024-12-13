import React from "react";
import { Outlet } from "react-router-dom";
import NavBarBankHome from "../components/NavbarBankHome";
import Footer from "../components/Footer";

const LayoutBank = () => {
  return (
    <>
      <Footer />
      <Outlet />
      <NavBarBankHome />
    </>
  );
};

export default LayoutBank;
