import React from 'react';
import { createBrowserRouter, Navigate  } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Dashboard from './Dashboard'
import Announcements from './components/Announcements';
import LoanCalculator from './components/LoanCalculator';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to= '/dashboard'/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/loancalculator',
        element: <LoanCalculator/>
      },
      {
        path: '/announcements',
        element: <Announcements/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

export default router;