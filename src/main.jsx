import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sig from './Sig';
import CGU from './CGU';
import Auth from './Auth';
import NosServices from './NosServices';
import Partners from './Partners';

import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <NosServices/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path: "/sig",
    element: <Sig/>,
  },
  {
    path: "/cgu",
    element: <CGU/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/partners",
    element: <Partners/>,
  },
  {
    path: "*",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
