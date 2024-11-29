import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutTrade = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default LayoutTrade;
