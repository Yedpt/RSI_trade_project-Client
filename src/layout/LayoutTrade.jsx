import React from 'react'
import { Outlet } from 'react-router-dom';
import TradeHeader from '../components/TradeHeader';
import NavBar from '../components/NavBar';

const LayoutTrade = () => {
  return (
    <>
      <TradeHeader />
      <Outlet />
      <NavBar />
    </>
  )
}

export default LayoutTrade
