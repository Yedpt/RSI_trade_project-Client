import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LayoutBank = () => {
  return (
    <>
      <Footer />
      <Outlet />
      <NavBar />
    </>
  );
};

export default LayoutBank;
