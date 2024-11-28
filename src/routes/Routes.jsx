import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutBank from '../layout/LayoutBank';
import LayoutTrade from '../layout/LayoutTrade';
import BankHome from '../pages/BankHome';
import TradeHome from '../pages/TradeHome';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBank />,
    children: [
      {
        index: true,
        element: <BankHome />,
      },
      {
        path: 'aboutus', 
        element: <div>About</div>,
      },
    ],
  },
  {
    path: '/trade',
    element: <LayoutTrade />,
    children: [
      {
        index: true,
        element: <TradeHome />,
      },
      {
        path: 'news',
        element: <div>news</div>,
      },
    ],
  },
]);
