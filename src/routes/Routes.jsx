import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import BankHome from '../pages/BankHome';
import TradeHome from '../pages/TradeHome';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
       index: true,
        element: <BankHome />,
      },
      {
        path: '/trade',
        element: <TradeHome />,
        
        
      },

    ]
  },
]);