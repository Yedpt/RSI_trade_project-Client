import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutBank = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default LayoutBank;
